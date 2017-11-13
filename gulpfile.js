var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


///
//scss/css
///
//DEST is for destination

var SCSS_SRC= './src/Assets/scss/**/*.scss';
var SCSS_DEST= './src/Assets/css';


//compile css
gulp.task('compile_scss', function(){ //making a compile function

  gulp.src(SCSS_SRC) //gulp source
  .pipe(sass().on('error', sass.logError)) //pipe is a gulp method that 'chains tasks'
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min' })) //.min
  .pipe(changed(SCSS_DEST)) //scss destination
  .pipe(gulp.dest(SCSS_DEST));


});

//detect changes in css
gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, ['compile_scss']);

});

//run task
gulp.task('default', ['watch_scss']);
