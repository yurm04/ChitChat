module.exports = function() {
    
    var port = process.env.port || 3000;

    return {
        port : port
    };
}();