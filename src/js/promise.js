const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
    constructor(fn) {
        this.state = PENDING
        this.value = ''
        this.reson = ''
        this.successArr = []
        this.failArr = []

        var resolve = value => {
            setTimeout(() => {
                if (this.state == PENDING) {

                    this.state = FULFILLED
                    this.value = value
                    this.successArr.map(cb => {
                        cb = cb(this.value)
                    })
                }
            });
        }
        var reject = value => {
            setTimeout(() => {
                if (this.state == PENDING) {

                    this.state = REJECTED
                    this.value = value
                    this.failArr.map(cb => {
                        cb = cb(this.value)
                    })
                }
            });
        }
        try {
            fn(resolve,reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onResolveFunc,onRejectFunc){
        onResolveFunc = typeof onResolveFunc == 'fucntion' ? onResolveFunc : value=>value
        onRejectFunc = typeof onRejectFunc == 'fucntion' ? onRejectFunc : reason=>reason

        if(this.state == PENDING){
            return (promise2 = new Promise((resolve,reject)=>{
                this.successArr.push(value =>{
                    var x = onResolveFunc(value)
                    resolvePromise(promise2,x , resolve,reject)
                })
                this.failArr.push(value =>{
                    var x = onRejectFunc(value)
                    resolvePromise(promise2,x , resolve,reject)
                })
            }))
        }
        if(this.state == FULFILLED){
            return (promise2 = new Promise((resolve,reject)=>{
                this.successArr.push(value =>{
                    var x = onResolveFunc(value)
                    resolvePromise(promise2,x , resolve,reject)
                })
            }))
        }
        if(this.state == REJECTED){
            return (promise2 = new Promise((resolve,reject)=>{
                this.failArr.push(value =>{
                    var x = onRejectFunc(value)
                    resolvePromise(promise2,x , resolve,reject)
                })
            }))
        }

    }
}
function resolvePromise(promise2,x , resolve,reject){
    if(x === promise2){
        reject('循环引用')
    }
    if( x instanceof MyPromise ){

        if(x.state == PENDING){
            x.then(
                y=>{
                    resolvePromise(promise2,y, resolve,reject)
                },
                r =>{
                    reject(r)
                }
            )
        }else{
            x.then(resolve,reject)
        }
    }else if(x && (typeof x  == 'function' || typeof x == 'object')){
        var flag = false
        var then = x.then
        if(typeof then == 'function'){
            then.call(x,
                y =>{
                    if(flag) return
                    flag = true
                    resolvePromise(promise2,y, resolve,reject)
                },
                r =>{
                    if(flag) return
                    flag = true
                    reject(y)
                })
        }else{
            resolve(x)
        }

    }else{
        resolve(x)
    }
}


