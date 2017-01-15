# gulp-workflow

Base para ocupar Gulp, en proyectos de desarrollo web.

##Plugins Ocupados

-[browser-sync](https://www.npmjs.com/package/browser-sync)
-[autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
-[cssnano](https://www.npmjs.com/package/gulp-cssnano)
-[htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
-[imagemin](https://www.npmjs.com/package/gulp-imagemin)
-[notify](https://www.npmjs.com/package/gulp-notify)
-[rename](https://www.npmjs.com/package/gulp-rename)
-[sass](https://www.npmjs.com/package/gulp-sass)
-[uglify](https://www.npmjs.com/package/gulp-uglify)

##Comandos a ocupar

###Browser-Sync & Tarea Default

```
gulp
```

###Tarea sobre *.html

Minifica el archivo >index.html
```
gulp minificarhtml
```

###Tarea sobre imegenes

Optimiza el peso de las imagenes.
```
gulp imagenes
```

###Tarea sobre *.js

Minimiza los archivos js
```
gulp javascript
```

###Tarea sobre sass

Procesa los archivos >scss.
```
gulp css
```