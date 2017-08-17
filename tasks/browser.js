import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';
//监听原始目录下的文件改变了，就要执行相应的改变
gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  //监听的文件、 要执行相应的任务
  gulp.watch('app/**/*.js',['scripts']);
  gulp.watch('app/**/*.ejs',['pages']);
  gulp.watch('app/**/*.css',['css']);
});
