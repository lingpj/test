// 1、装饰类
// target：构造函数
// function log(target, name, descriptor) {
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
//     return class Bike{
//         run(){
//             console.log('Bike is running')
//         }
//     }
// }

// @log 
// class Car {
//     run() {
//         console.log('Car is running')
//     }
// }

// const c1 = new Car()
// c1.run()

// 2、装饰类方法
// target:原型
// name ：方法名
// decorator ： 方法的配置参数
// function log(target,name,decorator){
//     console.log(target)
//     console.log(name)
//     console.log(decorator)
//     var old =  decorator.value
//     decorator.value = function(...arg){
//         // 拦截的逻辑
//         // ...
//         console.log('业务逻辑')
//         return old.apply(this,arg)
//     }
// }
// class Car {
//     @log
//     run(){
//         console.log('car is runing')
//     }
// }
// var car = new Car()
// car.run()
