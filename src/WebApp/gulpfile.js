/// <binding ProjectOpened='default' />
var gulp = require('gulp');

var paths = {
    webroot: './wwwroot/',
    npm: './node_modules/'
};
paths.libs = [
    paths.npm + 'systemjs/dist/**/*',
    paths.npm + 'angular2/bundles/**/*',
    paths.npm + 'es6-shim/**/*',
    paths.npm + 'rxjs/bundles/**/*',
    paths.npm + 'material-design-lite/dist/**/*'
];
paths.libDest = paths.webroot + 'lib/';

gulp.task('default', function () {
    return gulp.src(paths.libs, { base: paths.npm })
        .pipe(gulp.dest(paths.libDest));
});
