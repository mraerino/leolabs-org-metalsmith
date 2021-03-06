var
    gulp         = require('gulp'),
    serve        = require('gulp-serve'),
    sass         = require('gulp-sass'),
    clean        = require('gulp-clean'),
    runSequence  = require('run-sequence'),
    metalsmith   = require('metalsmith'),
    collections  = require('metalsmith-collections'),
    layouts      = require('metalsmith-layouts'),
    permalinks   = require('metalsmith-permalinks'),
    markdown     = require('metalsmith-markdown'),
    htmlMinifier = require('metalsmith-html-minifier');

const destination = "build";

gulp.task('clean', function() {
    return gulp.src(destination, {read: false})
        .pipe(clean());
});

gulp.task('scss', function() {
    return gulp.src('./theme/scss/*.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError))
        .pipe(gulp.dest(destination + '/css'));
});

gulp.task('assets', function() {
    return gulp.src('./uploads/**/*')
        .pipe(gulp.dest(destination + "/uploads"));
});

// build HTML files using Metalsmith
gulp.task('metalsmith', function() {
    metalsmith(".")
        .clean(false)
        .source("content")
        .destination(destination)
        .use(collections({
            articles: {
                pattern: 'posts/*.md',
                sortBy: 'date',
                reverse: true
            }
        }))
        .use(markdown())
        .use(permalinks({
            pattern: ":title/",
            relative: false
        }))
        .use(layouts({
            engine: "handlebars",
            default: "default.html",
            directory: "theme/layouts",
            partials: "theme/partials"
        }))
        .use(htmlMinifier())
        .build(function(err) {
            if (err) throw err;
        });
});

gulp.task('build', ['clean'], function() {
    runSequence('clean', ['scss', 'metalsmith', 'assets']);
});

gulp.task('default', ['build']);

gulp.task('serve', ['default'], serve(destination));