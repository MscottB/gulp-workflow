# gulp-workflow

Base para ocupar Gulp, en proyectos de desarrollo web.

##Plugins Ocupados

- **browser-sync** ([Link](https://www.npmjs.com/package/browser-sync))
- **autoprefixer** ([Link](https://www.npmjs.com/package/gulp-autoprefixer))
- **cssnano** ([Link](https://www.npmjs.com/package/gulp-cssnano))
- **htmlmin** ([Link](https://www.npmjs.com/package/gulp-htmlmin))
- **imagemin** ([Link](https://www.npmjs.com/package/gulp-imagemin))
- **notify** ([Link](https://www.npmjs.com/package/gulp-notify))
- **rename** ([Link](https://www.npmjs.com/package/gulp-rename))
- **sass** ([Link](https://www.npmjs.com/package/gulp-sass))
- **uglify** ([Link](https://www.npmjs.com/package/gulp-uglify))
- **imagemin-pngcrush** ([Link](https://www.npmjs.com/package/imagemin-pngcrush))

##Comandos a ocupar

###Browser-Sync & Tarea Default

```
gulp
```

###Tarea sobre *.html

Minifica el archivo `index.html`
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

Procesa los archivos `scss`.
```
gulp css
```