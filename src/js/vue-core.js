var data = {
    name:'zhangsan',
    age:18,
    hobby:['eat','drink','play']
}

var methods = ['reverse','push','pop','unshift','shift','sort','splice']

var arrayProto = Array.prototype

var proto = Object.create(arrayProto)

methods.forEach(func =>{
    proto[func] = function(){
        var res = arrayProto[func].call(this,...arguments)
        render()
        return res
    }
})

function Observe(obj){
    if(typeof obj != 'object'){
        return
    }
    if(Array.isArray(obj)){
        obj.__proty__ = proto
        return
    }
    Object.keys(obj).forEach(key =>{
        defineReactive(obj,key,obj[key])
    })
    
}


function defineReactive(obj,key,value){
    Observe(obj)
    Object.defineProperty(obj,key,{
        get:function(){
            return value
        },
        set:function(newValue){
            Observe(newValue)
            
            if(newValue!==value){
                value = newValue
                render()
            }
        }
    })
}


