'use strict';

module.exports = {

  check: {
    pug:            'src/templates',
    styles:         'src/styles/style.scss',
    stylesLibs:     'src/styles/libs.css',
    scripts:        'src/js/script.js',
    scriptsLibs:    'src/js/libs.js',
    fonts:          'src/fonts',
    img:            'src/images',
    svg:            'src/svg',
    sprite:         'src/svg/sprite',
    spriteStyles:   'src/styles/sprite',
    docs:           'src/docs',
    videos:         'src/videos',
    projects:       'src/projects'
  },

  app: {
    pug:            'src/templates/*.pug',
    emitty:         'src/templates/**/*.pug',
    styles:         'src/styles/style.scss',
    stylesLibs:     'src/styles/libs.css',
    scripts:        'src/js/script.js',
    scriptsLibs:    'src/js/libs.js',
    fonts:          'src/fonts/**/*.woff',
    fontsttf:       'src/fonts/**/*.ttf',
    img:            'src/images/**/*.{png,jpg,ico}',
    svg:            ['src/svg/**/*.svg', '!src/svg/sprite/**/*.svg'],
    sprite:         'src/svg/sprite/*',
    spriteStyles:   'src/styles/sprite/',
    docs:           'src/docs/**/*',
    videos:         'src/videos/**/*',
    projects:       'src/projects/**/*'
  },

  watch: {
    pug:            'src/templates/**/*.pug',
    html:           'docs/*.html',
    styles:         'src/styles/**/*.scss',
    css:            'docs/css/style.css',
    stylesLibs:     'src/styles/libs.css',
    scripts:        ['src/js/**/*.js', '!src/js/libs.js'],
    scriptsLibs:    'src/js/libs.js',
    fonts:          'src/fonts/**/*.woff',
    fontsttf:       'src/fonts/**/*.ttf',
    img:            'src/images/*',
    svg:            ['src/svg/**/*.svg', '!src/svg/sprite/**/*.svg'],
    sprite:         'src/svg/sprite/**/*.svg',
    docs:           'src/docs/**/*',
    videos:         'src/videos/**/*',
    projects:       'src/projects/**/*'
  },

  dist: {
    dist:           'docs/',
    styles:         'docs/css/',
    scripts:        'docs/js/',
    fonts:          'docs/fonts/',
    img:            'docs/images/',
    svg:            'docs/svg/',
    html:           'docs/**/*.html',
    docs:           'docs/docs/',
    videos:         'docs/videos/',
    projects:       'docs/projects/'
  }

};
