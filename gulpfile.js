var gulp = require('gulp');
var mocha = require('gulp-mocha');
var del = require('del');

gulp.task('clean:dist', function() {
    return del(['dist/']);
})

gulp.task('test', function() {
    return gulp.src(['test/*.js'], {read : false})
        .pipe(mocha({ reporter: 'spec'}));
});

gulp.task('dist', [ 'test', 'clean:dist' ], function() {
    return gulp.src(['src/**/*', 'package.json'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['test', 'clean:dist', 'dist']);