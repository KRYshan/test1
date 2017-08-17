//let and var
/*function test(){
 /!*    for(let i=1;i<3;i++){
         console.log(i);
     }
     console.log(i);*!/
/!*let a=1;
let a=2;*!/
}
test();*/
//常量
/*
function last(){
    const PI=3.1415926;
  //  console.log(PI);
    const k={
        a:1
    };
    k.b=3;
    console.log(PI,k);
}
last();*/
//lesson2
//解构赋值，左边结构和右边结构一一对应
/*
数组解构赋值、对象解构赋值、字符串结构赋值[左边数组，右边字符串]、函数参数结构赋值、数值结构赋值
 */
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}
{
    let a,b;
    [{a,b}={a:1,b:2}];
    console.log(a,b);
}
//配对不成功的时候，默认值为undefined
{
    let a,b,c;
    [a,b,c]=[1,2];
    console.log(a,b,c);
}
//解构赋值在数值交换的时候，比较有用
{
    let a=1,b=2;
    [a,b]=[b,a];
    console.log(a,b);
}
//解构赋值在函数返回值的时候比较有用
{
    function f(){
        return [1,2];
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}
//返回多个值的时候，可以选择性的接收有用的【,,,,】
{
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);
}
//不确定返回多少个元素，只关心第一个，其他的赋值给一个数组
{
    function f() {
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,...b]=f();
    console.log(a,b);
}
//对象解构赋值
{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}
//对象解构赋值，默认值
//json对象的解构赋值
{
    let metaData={
        title:'abc',
        test:[{title:'test',desc:'description'}]
    }
    let{title:estitle,test:[{title:cnTitle}]}=metaData;
    console.log(estitle,cnTitle);
}
//正则扩展
/*
{
    let regex=new RegExp('xyz','i');
    let regex2=new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
}*/
/*
Symbol的概念：提供独一无二的值，用symbol声明的变量a和b永远不可能相等
 */
{
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);
    let a3=Symbol.for('a3');//a3是一个key值，如果a3存在，则可以返回它的值
    let a4=Symbol.for('a3');//a3和a4是相等的
    console.log(a3);
    console.log(a3===a4);
}
/*
Symbol使用的场景
 */
{
    let a1=Symbol.for('abc');
    let obj={
      [a1]:'123',
      'abc':345,
      'c':456
    };
    console.log(a1,obj);
    //let of和let in没有办法获取Symbol()的值
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }
    for(let key in obj){
        console.log('let in',key,obj[key]);
    }
    //
    Object.getOwnPropertySymbols(obj).forEach(item=>console.log(obj[item]));
  //reflect对象,Symbol和非Symbol
    Reflect.ownKeys(obj).forEach(item=>console.log(obj[item]));

}
//Set和Map
{
    const set=new Set([1,2,3,4,5]);
   let a= [...set];
   console.log(a[0]);
}
{
    function divs(){
        return [...document.querySelectorAll('body')];
    }
    const set=new Set(divs());
    console.log(set.size);
}
{
    let set=new Set(['gre','red']);
}
//js的对象，本质上是键值对的集合,但其键只能用字符串
{
    const data={};
    const element=document.getElementsByTagName('body')[0];
    data[element]='metdata';
    console.log(data[element]);
    //document.body.innerHTML=data[element];
   /* const o={a:1,p:2};
    const map=new Map();
    map.set(o);
   console.log( map.get(o.a));*/
   const map=new Map([
       ['name','张三'],
       ['title','Author']
   ]);
   //items.forEach((key,value)=>map.set(key,value));
//键值，要一样，其实两个['a']是两个数组对象
    const map1=new Map();
    map1.set(['a'],555);
   console.log( map1.get(['a']));
}
//es生成对象的实例方法，还有继承
{
    //通过构造函数和原型结合的方式，定义类
    function Point(x,y){
    this.x=x;
    this.y=y;
}
    Point.prototype.toString=function(){
        return '('+this.x+','+this.y+')';
    };
    //继承
    function PointB(x,y,z){
        Point.call(this,x,y);
        this.z=z;
    }
    PointB.prototype=new Point();
    PointB.prototype.toString=function(){
        return '('+this.x+','+this.y+this.z+')';
    };
    var p=new Point(1,2);
    var p1=new PointB(1,2,3);
     console.log(p.toString());
    console.log(p1.toString());
}
//ES6引入了类，作为对象的模板
{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y
        }

        toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }
    //可以立即执行的类
    let person=new class{
        constructor(x,y){
            this.x=x;
            this.y=y;
        }
        toString(){
            return this.x+','+this.y;
        }
    }(1,2);
        console.log(person.toString());
    //设置get和set关键字
}
{
    class Point{
        constructor(x){
         this.x=x;
        }
        get pro_x(){
            return this.x;
        }
        set pro_x(value){
            this.x=value;
        }
    }
    let p=new Point(1,2);
    p.pro_x=3;
    console.log(p.pro_x);
}
//类的继承
{
    class Point{
        constructor(x,y) {
            this.x = x;
            this.y = y;
        }

        toString(){
            return '('+this.x+','+this.y+')';
        }
   }
   class PointB extends Point{
        constructor(x,y,z){
            super(x,y)
            this.z=z;
        }
        toString(){
            return super.toString()+','+this.z;
        }
   }
   //可以判断一个类是否继承了另外一个类
   Object.getPrototypeOf(PointB)===Point
    //super可以当作函数 和 对象 使用
    /*
    super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B
     */
}
/*
proxy 代理
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，
都必须先通过这层拦截，
因此提供了一种机制，可以对外界的访问进行过滤和改写。
 */