const fs        = require('fs');
const {
  src,
  dest
}  	            = require('gulp');
const config 	  = require('../config.js');
const changed		= require('gulp-changed');


module.exports = function transferProjects(done) {
  fs.access(config.check.projects, error => {
    if (error) {
      return done();
    } else {
      done();
      return src(config.app.projects)
        .pipe(changed(config.dist.projects))      // Смотрим изменились ли файлы
        .pipe(dest(config.dist.projects));        // Выгружаем
    }
  });
};
