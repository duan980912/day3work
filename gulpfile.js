var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var cleanCss = require("gulp-clean-css");
var cleanJs = require("gulp-uglify");
var cleacHtml = require("gulp-htmlmin");
gulp.task("defaults", function() {

    gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'Android>=4.0'] }))
        .pipe(cleanCss())
        .pipe(gulp.dest("./src/css"))
});
gulp.task("readjs", function() {
    gulp.src("./src/js/*.js")
        .pipe(cleanJs())
        .pipe(gulp.dest("./src/js/gzip"))
});
var options = {
    collapseWhitespace: true
}
gulp.task("minHtml", function() {
    gulp.src("./src/*.html")
        .pipe(cleacHtml(options))
});
gulp.task("watch", function() {
    gulp.watch("./src/scss/*.scss", ["defaults"])
})
gulp.task("dev", ['defaults', 'readjs', 'watch'])