var PENDING = 'pending'
var FULFILLED = 'fulfilled'
var REJECTED = 'rejected'

class MyPromise {
    constructor(fn) {
        this.value = ''
        this.reason = ''
        this.state = PENDING
        this.fulfilledArr = []
        this.rejectedArr = []

        var resolve = (value) => {
            setTimeout(() => {
                if (this.state == PENDING) {
                    this.state = FULFILLED
                    self.value = value
                    self.fulfilledArr.forEach(cb => {
                        cb = cb(value)
                    })
                }
            });
        }
        var reject = (value) => {
            setTimeout(() => {
                if (this.state == PENDING) {
                    this.state = REJECTED
                    self.value = value
                    self.rejectedArr.forEach(cb => {
                        cb = cb(value)
                    })
                }
            });
        }
        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfill, onReject) {
        var promise2;

        onFulfill = typeof onFulfill == 'function' ? onFulfill : onFulfill => onFulfill
        onReject = typeof onReject == 'function' ? onReject : onReject => { throw onFulfill }
        if (this.state == PENDING) {
            return (promise2 = new MyPromise((resolve, reject) => {
                this.fulfilledArr.push(value => {
                    var x = onFulfill(this.value)
                    resolvePromise(x, value, resolve, reject)
                })
                this.rejectedArr.push(value => {
                    var x = onReject(this.value)
                    resolvePromise(x, promise2, resolve, reject)
                })
            }))
        }
        if (this.state == FULFILLED) {
            return (promise2 = new MyPromise((resolve, reject) => {
                
                this.fulfilledArr.push(value => {
                    var x = onFulfill(this.value)
                    resolvePromise(x, promise2, resolve, reject)
                })
            }))
        }
        if (this.state == REJECTED) {
            return (promise2 = new MyPromise((resolve, reject) => {
                
                this.rejectedArr.push(value => {
                    var x = onReject(this.value)
                    resolvePromise(x, promise2, resolve, reject)
                })
            }))
        }

    }
    resolvePromise(x,promise,resolve,reject){
        if(x == promise){
            reject('循环引用')
        }
        if(x instanceof MyPromise){
            if(x.state == PENDING){
                x.then(y =>{
                    resolvePromise(y,promise,resolve,reject)
                },r=>{
                    reject(r)
                })
            }else{
                x.then(resolve,reject)
            }
        }else if(typeof x == 'object' || typeof x == 'function'){
            var flag = false
            var then = x.then
            if(typeof x == 'function'){
                x.call(x,
                    y =>{
                        if(false) return
                        flag = true
                        resolvePromise(x,promise2,resolve,reject)
                    },r=>{
                        if(false) return
                        flag = true
                        reject(r)
                    })
            }else{
                reject(x)
            }
        }else{
            reject(x)
        }
    }
}