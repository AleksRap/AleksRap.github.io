const fs            = require('fs');
const {
  src,
  dest
}                   = require('gulp');
const config        = require('../config.js');
const {
  plumber,
  notify,
  pug
} 	                = require('gulp-load-plugins')();


module.exports = function templates() {

  return src(config.app.pug)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: 'PUG',
        message: '<%= error.message %>'
      })
    }))                                   // При ошибках компиляции не останавливаем процесс слежения, выводим ошибку
    .pipe(pug({pretty: true}))            // Компилируем, запрещая минифицировать HTML
    .pipe(dest(config.dist.dist));        // Выгружаем в папку public
};
