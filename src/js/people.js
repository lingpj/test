export default class People{
    constructor(name,age){
        this.name = name || '匿名'
        this.age = age || '18'
    }
    eat(food){
        console.log('我在吃'+food)
    }
}