import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';
//serve一定要放在最后面
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
