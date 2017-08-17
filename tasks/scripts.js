import gulp from 'gulp';
//在gulp中if判断
import gulpif from 'gulp-if';
//gulp中拼接
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
//文件重命名
import named from 'vinyl-named';
//文件修改之后，浏览器自动刷新
import livereload from 'gulp-livereload';
//文件信息流的处理
import plumber from 'gulp-plumber';
    //;
import rename from 'gulp-rename';
//js和css压缩
import uglify from 'gulp-uglify';
//命令行输出
import {log,colors} from 'gulp-util';
//命令行参数解析
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
      //处理错误文件
    .pipe(plumber({
      errorHandle:function(){

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch,livereload()))
})
