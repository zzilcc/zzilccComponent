'use strict'

const { series, src, dest } = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile () {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('../../lib/theme-default'))
}

function copyfont () {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('../../lib/fonts/theme-default'))
}

exports.build = series(compile, copyfont)
