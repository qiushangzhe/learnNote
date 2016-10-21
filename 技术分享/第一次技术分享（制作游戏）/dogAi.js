//状态参数
var s_map = {
    STATUS_NULL:0,//白痴ing
    STATUS_TIRED:1,//疲惫状态
    STATUS_HUNGER:2,//饥饿状态
    STATUS_HAPPY:3//活力状态
}
var dog = {};
//状态标记位
dog.status = s_map.STATUS_HAPPY;
//属性
dog.tiredNum = 0;
dog.hungerNum = 0;
dog.hp = 100;
//方法
dog.sleep = function(){
    console.log("睡觉呢....");
    this.tiredNum -=20 ;
    this.check();
    console.log(this.tiredNum);
}
dog.eat = function(){
    console.log("吃饭呢....");
    this.hungerNum -=20 ;
    this.check();
    console.log(this.hungerNum);
}
dog.play = function(){
    console.log("到处乱走....");
    this.tiredNum += parseInt(Math.random()*20);
    this.hungerNum += parseInt(Math.random()*20);
    this.check();
}
dog.update = function(){
    switch (this.status) {
        case s_map.STATUS_TIRED:this.sleep();break;
        case s_map.STATUS_HUNGER:this.eat();break;
        case s_map.STATUS_HAPPY:this.play();break;
        default:
    }
}
dog.check = function(){
    if(this.tiredNum > 100) this.status = s_map.STATUS_TIRED;
    else if(this.hungerNum > 100) this.status = s_map.STATUS_HUNGER;
    else if(this.tiredNum < 0 || this.hungerNum < 0)this.status = s_map.STATUS_HAPPY;
}


var doooog = Object.create(dog);
setInterval(function(){
    doooog.update();
},100);
