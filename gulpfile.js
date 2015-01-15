'use strict';
var gulp = require('gulp'),
    mocha = require('gulp-mocha');


//add a task for running unit tests
gulp.task('test', function (cb) {
    gulp.src(['test/mocha/*.js'])
        .pipe(mocha({
            reporter: 'spec'
        }))
        .on('end', cb);
});