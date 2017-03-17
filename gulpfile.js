/*===================
*Plugins a Ocupar
 ====================*/
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin'),
    rename = require("gulp-rename"),
    imageminpngcrush = require('imagemin-pngcrush'),
    notifier = require('node-notifier'),
    browserSync = require('browser-sync').create();

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
    notifier.notify({'title': 'Tarea Deafult Exitosa','message': 'pagina compilada & inicando'});

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
    gulp.src('app/img/*.{png,jpg,jpeg,gif,svg}')
        .pipe(
            imagemin({
              plugins:[imageminpngcrush()]
            }))
        .pipe(gulp.dest('app/img/min'));
        notifier.notify({'title': 'Gulp Imagenes','message': 'Imagenes Comprimidas Exitosamente'});
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
    .pipe(sass())
    .pipe(cssnano())
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

