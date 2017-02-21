/*===================
*Plugins a Ocupar
 ====================*/
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var notify = require('gulp-notify');
var imageminpngcrush = require('imagemin-pngcrush');
var browserSync = require('browser-sync').create();

/*===========================
*Browser-Sync & Tarea Default
 ===========================*/

gulp.task('default', ['css','javascript','minificarhtml'], function(){
    browserSync.init({
        server: "./app"
    });

    gulp.watch("scss/**/*.scss", ['css']);
    gulp.watch("./*.html", ['minificarhtml']);
    gulp.watch("app/js/*.js", ['javascript']).on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

/*===================
* Tarea sobre *.html
 ====================*/

gulp.task('minificarhtml', function(){
    return gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('app'));
});

/*====================
*Tarea sobre imegenes
 =====================*/

gulp.task('imagenes', function(){
    gulp.src('app/img/*')
        .pipe(
            imagemin({
              plugins:[imageminPngcrush()]
            }))
        .pipe(gulp.dest('app/img/min'));
        .pipe(notify("Compresion de Imagenes Lista!"));
});

/*===================
*Tarea sobre *.js
 ====================*/

gulp.task('javascript', function () {
    gulp.src('app/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js/dist'));
});

/*=====================
*Tarea sobre css y scss
 ======================*/

gulp.task('css', function(){
    return gulp.src('scss/**/*.scss')
    .pipe(sass()).on('error', notify.onError(function (error) {
       return 'Error al compilar sass.\n Detalles en la consola.\n' + error;
    }))
    .pipe(cssnano())
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
    .pipe(browserSync.stream());
});

