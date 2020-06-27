const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')

const entry = './src/server/**/*.ts'
const cleanEntry = './src/server/config/index.ts'

const babelConfig = {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    '@babel/plugin-transform-modules-commonjs'
  ]
}

function buildProd () {
  return gulp
    .src(entry)
    .pipe(
      // 不读取外面的babelrc配置，不需要编译成es5
      babel({
        babelrc: false,
        ignore: cleanEntry,
        ...babelConfig
      })
    )
}

function buildLint () {
  return (
    gulp
      .src(entry)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  )
}

let build
if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildProd)
}
if (process.env.NODE_ENV === 'lint') {
  build = gulp.series(buildLint)
}

gulp.task('default', build)

