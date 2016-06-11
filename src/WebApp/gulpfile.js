/// <binding ProjectOpened='default' />
var gulp = require('gulp');

var paths = {
    webroot: './wwwroot/',
    npm: './node_modules/'
};
paths.libs = [
    paths.npm + '@angular/**/*',
    paths.npm + 'core-js/**/*',
    paths.npm + 'rxjs/**/*',
    paths.npm + 'zone.js/dist/**/*',
    paths.npm + 'reflect-metadata/**/*',
    paths.npm + 'systemjs/dist/**/*',
    paths.npm + 'material-design-lite/dist/**/*',

];
paths.libDest = paths.webroot + 'lib/';

gulp.task('default', function () {
    return gulp.src(paths.libs, { base: paths.npm })
        .pipe(gulp.dest(paths.libDest));
});