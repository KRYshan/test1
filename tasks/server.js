import gulp from 'gulp';
import gulpif from 'gulp-if';
//启动脚本作为服务器
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{
  if(!args.watch) return cb();

  //创建一个服务器，启动的服务器
  var server = liveserver.new(['--harmony','server/bin/www']);
  server.start();

  //实现浏览器自动刷新，监听哪些路径
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    //通知服务器，我的文件改变啦
    server.notify.apply(server,[file]);
  })

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    //监听需要重启服务的文件
    server.start.bind(server)()
  });
})
