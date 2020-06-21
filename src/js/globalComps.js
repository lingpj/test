import Vue from 'vue'
import customAlert from '../components/customAlert.vue'
export var asdf = {
    install:function(){
        var CustomAlert = Vue.extend(customAlert)
        var func = (options)=>{
            var el = document.createElement('div')
            document.body.appendChild(el)
            new CustomAlert({
                data(){
                    return options
                }
            }).$mount(el)
        }
        Vue.prototype.$myAlert = func
    }
}