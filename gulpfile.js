var gulp       = require('gulp');
var connect    = require('gulp-connect');
var open       = require("gulp-open");
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var port       = process.env.port || 3000;

gulp.task('browserify', function() {
  gulp.src('./app/src/js/main.js')
      .pipe(browserify({ transform: 'reactify' }))
      .pipe(gulp.dest('./app/dist/js'));
});

// launch browser in a port
/*
gulp.task('open', function(){
  var options = {
    url: 'http://127.0.0.1:3000/',
    app: 'google chrome'
  };
  gulp.src('./app/index.html')
  .pipe(open('', options));
});
*/

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function () {
  gulp.src('./app/dist/**/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src('./app/src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/src/css/'))
    .pipe(connect.reload());
})

// watch files for live reload
gulp.task('watch', function() {
    gulp.watch('app/dist/js/*.js', ['js']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/src/js/**/*.js', ['browserify']);
    gulp.watch('app/src/sass/**/*.scss', ['styles']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch', 'styles']);  // took out 'open'