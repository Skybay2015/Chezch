let gulp = require('gulp'),
   sass = require('gulp-sass'),
   browserSync = require('browser-sync'),
   { reload } = browserSync,
   uglifyCss = require('gulp-uglifycss'),
   uglifyJs = require('gulp-uglify-es').default,
   concat = require('gulp-concat'),
   rename = require('gulp-rename'),
   imagemin = require('gulp-imagemin'),
   pngquant = require('imagemin-pngquant');

gulp.task('sass', function() {
   return gulp
      .src('app/sass/**/*.sass')
      .pipe(
         sass({
            errLogToConsole: true,
            outputStyle: 'compact',
            precision: 10,
         }),
      )
      .pipe(gulp.dest('app/css'));
});

gulp.task('html', function() {
   return gulp
      .src('app/**/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(reload({ stream: true }));
});

gulp.task(
   'styles',
   gulp.series('sass', function() {
      return gulp
         .src('app/css/**/*.css')
         .pipe(concat('index.css'))
         .pipe(rename({ suffix: '.min' }))
         .pipe(
            uglifyCss({
               maxLineLen: 80,
            }),
         )
         .pipe(gulp.dest('./dist/css'))
         .pipe(reload({ stream: true }));
   }),
);

gulp.task('scripts', function() {
   return gulp
      .src('app/js/**/*.js')
      .pipe(concat('index.js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglifyJs())
      .pipe(gulp.dest('dist/js'))
      .pipe(reload({ stream: true }));
});

gulp.task('img', function() {
   return gulp
      .src('app/img/**/*')
      .pipe(
         imagemin({
            interlaced: true,
            progressive: true,
            une: [pngquant()],
         }),
      )
      .pipe(gulp.dest('dist/img'))
      .pipe(reload({ stream: true }));
});

gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: './dist/',
      },
   });
});

gulp.task('watch', function() {
   gulp.watch('app/sass/**/*.sass', gulp.series('styles'));
   gulp.watch('app/js/**/*.js', gulp.series('scripts'));
   gulp.watch('app/img/**/*', gulp.series('img'));
   gulp.watch('app/**/*.html', gulp.series('html'));
});

gulp.task(
   'default',
   gulp.parallel('watch', 'styles', 'scripts', 'img', 'browserSync', 'html'),
);
