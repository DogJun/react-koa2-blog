const gulp = require('gulp')
const babel = require('gulp-babel')

const entry = './src/server/**/*.ts'
const cleanEntry = './src/server/config/index.ts'

const babelConfig = {
  presets: ['@babel/preset-typescript'],
  plugins: []
}

function buildProd () {
  return gulp
    .src(entry)
    .pipe(
      babel({
        babelrc: false,
        ignore: cleanEntry,
        ...babelConfig
      })
    )
}

function buildDev () {
  const sourceFiles = ['./package.json', './src/server/**']
  return (
    gulp
      .src(sourceFiles)
      .pipe(gulp.dest('./dist'))
  )
}

let build = gulp.series(buildDev)
if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildProd, buildConfig)
}
if (process.env.NODE_ENV === 'lint') {
  build = gulp.series(buildLint)
}

gulp.task('default', build)

