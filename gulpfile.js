var gulp = require('gulp')
var connect = require('gulp-connect')
gulp.task('webserver',function(){
    connect.server({
        livereload:true,
        post:9000
    })
})
gulp.task('default',['webserver'])