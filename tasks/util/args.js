import yargs from 'yargs';

const args = yargs
//区分线上和开发环境
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
//命令行执行日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
//资源文件映射
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv

export default args;
