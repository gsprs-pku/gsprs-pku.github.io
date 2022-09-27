function animate(obj, target, callback) {
    clearInterval(obj.timer) //先把原先地定时器清除之后，再开启另外一个新地定时器
    obj.timer = setInterval(fn, [15])
 
    function fn() {
        var a = obj.offsetLeft //不能换成div.style.left 不然会只移动一次。注意读取位置永offset，修改永style
        var step = (target - a) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step) //将结果赋值回去
            //把步长值改为整数，不要出现小数的情况
        if (a == target) {
 
            //取消定时器
            clearInterval(obj.timer)
                //执行回调函数 函数名+()回调函数写到定时器结束里面
                //首先判断没有有这个回调函数
            if (callback) {
                callback()
            }
 
        }
 
        obj.style.left = a + step + 'px'
 
    }
}
 
function callback() {
    img.src = '10-右.png'
    img.style.width = '50%'
}
 
function callback1() {
    img.src = '9-左.png'
    img.style.width = '50%'
}
