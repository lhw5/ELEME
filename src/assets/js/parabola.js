// JavaScript Document
var parabola = function(config){
    var b = 0,
        INTERVAL = 15,
        timer = null,
        x1,y1,x2,y2,originx,originy,diffx,diffy,speedx;

    this.config = config || {};
    // 起点
    this.origin = $(this.config.origin)||null;
    // 终点
    this.target = $(this.config.target)||null;
    // 运动的元素
    this.element = $(this.config.element)||null;
    // 曲线弧度
    this.a = this.config.a || 0.001;
    // 运动时间(ms)
    this.time = this.config.time || 1000;

    this.init = function(){
        x1 = this.origin.offset().left;
        y1 = this.origin.offset().top;
        x2 = this.target.offset().left;
        y2 = this.target.offset().top;
        originx = x1;
        originy = y1;
        diffx = x2-x1;
        diffy = y2-y1;
        speedx = diffx/this.time;
        b = (diffy - this.a*diffx*diffx)/diffx;
        this.element.css({
            left: x1,
            top: y1
        })
        return this;
    }

    // 确定动画方式
    this.moveStyle = function(){
        var moveStyle = 'position',
            testDiv = document.createElement('div');
        if('placeholder' in testDiv){
            ['','ms','moz','webkit'].forEach(function(pre){
                var transform = pre + (pre ? 'T' : 't') + 'ransform';
                if(transform in testDiv.style){
                    moveStyle = transform;
                }
            })
        }
        return moveStyle;
    }

    this.move = function(){
        var start = new Date().getTime(),
        moveStyle = this.moveStyle(),
        _this = this;
        timer = setInterval(function(){
            if(new Date().getTime() - start > _this.time){
                clearInterval(timer);
                _this.element.css({
                    left: x2,
                    top: y2
                })
                typeof _this.config.callback === 'function' && _this.config.callback(_this.element);
                return;
            }
            var x = speedx * (new Date().getTime() - start);
            var y = _this.a*x*x + b*x;
            if(moveStyle === 'position'){
                _this.element.css({
                    left: x+originx,
                    top: y+originy
                })
            }else{
                if(window.requestAnimationFrame){
                    window.requestAnimationFrame(_this.element[0].style[moveStyle] = 'translate('+x+'px,'+y+'px)');
                }else{
                    _this.element[0].style[moveStyle] = 'translate('+x+'px,'+y+'px)';
                }
            }
        },INTERVAL)
        return this;
    }
    this.init();
}

//引入依赖jquery
import $ from "jquery";

//输出api
export default{
	parabola
}


