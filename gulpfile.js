var gulp       = require('gulp');
// var connect    = require('gulp-connect');
var open       = require("gulp-open");
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var nodemon    = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var port       = process.env.port || 3000;

gulp.task('browserify', function() {
  gulp.src('./app/src/js/main.js')
      .pipe(browserify({ transform: 'reactify' }))
      .pipe(gulp.dest('./app/dist/js'));
});

// start server with nodemon
gulp.task('nodemon', function() {
  // listen for changes
  livereload.listen();
  // configure nodemon
  nodemon({
    // the script to run the app
    script: 'server.js',
    ext: 'js'
  }).on('restart', function(){
    // when the app has restarted, run livereload.
    gulp.src('server.js')
      .pipe(livereload());
      // .pipe(notify('Reloading page, please wait...'));
  })
})

// live reload js
gulp.task('js', function () {
  gulp.src('./app/dist/**/*.js')
    .pipe(livereload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(livereload());
});

gulp.task('styles', function() {
  gulp.src('./app/src/sass/styles.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/dist/css/'))
    .pipe(livereload());
});

// watch files for live reload
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('app/dist/js/*.js', ['js']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/src/js/**/*.js', ['browserify']);
    gulp.watch('app/src/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['browserify']);

gulp.task('server', ['nodemon','browserify', 'watch', 'styles']);  // took out 'open', 'connect'