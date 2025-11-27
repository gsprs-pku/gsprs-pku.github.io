window.addEventListener('load', function() {
    //1、获取元素
    var arrowl = document.querySelector('.arrow-l')
    var arrowr = document.querySelector('.arrow-r')
    var focus = document.querySelector('.focus')
    var focuswidth = focus.offsetWidth
    
    //2、鼠标经过轮播图，左右箭头显示
    focus.addEventListener('mouseover', function() {
        arrowl.style.display = 'block'
        arrowr.style.display = 'block'
        clearInterval(timer)
        timer = null //清除定时器变量
    })
    
    //鼠标离开，就隐藏左右按钮
    focus.addEventListener('mouseout', function() {
        arrowl.style.display = 'none'
        arrowr.style.display = 'none'
        timer = setInterval(function() {
            //手动调用点击事件
            arrowr.click()
        }, 2000)
    })
 
    //3、动态生成小圆圈
    var ol = document.querySelector('.circle')
    var ul = focus.querySelector('ul') //只选focus下面的ul
    
    //克隆第一张图片，放到ul最后面（实现无缝滚动）
    var firstClone = ul.children[0].cloneNode(true)
    ul.appendChild(firstClone)
    
    //得到li的个数（减去克隆的那一个）
    var imgCount = ul.children.length - 1;
    
    for (var i = 0; i < imgCount; i++) {
        //创建li
        var li = document.createElement('li')
        //记录当前小圆圈的索引号，通过自定义属性
        li.setAttribute('index', i)
        //放入ol
        ol.appendChild(li)
        
        //4、小圆圈的排他思想
        li.addEventListener('click', function() {
            //把所有li清除current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            //当前的li设置current类名
            this.className = 'current'
            
            //点击小圆圈，实现图片滑动的效果
            var index = this.getAttribute('index')
            num = parseInt(index)
            circle = num
            animate(ul, -num * focuswidth)
        })
    }
 
    //把ol里面的第一个li设置为current类;默认第一张图选中
    ol.children[0].className = 'current'
    
    //5、点击右侧按钮一次，图片移动一张
    var num = 0
    var circle = 0 //控制小圆圈的变化
    var flag = true //节流阀
    
    //右侧按钮点击事件
    arrowr.addEventListener('click', function() {
        if (flag) {
            flag = false //关闭节流阀
            
            //如果走到了最后复制的图片
            if (num == ul.children.length - 1) {
                ul.style.left = 0
                num = 0
            }
            
            num++
            animate(ul, -num * focuswidth, function() {
                flag = true //打开节流阀
            })
            
            //小圆圈变化
            circle++
            if (circle == ol.children.length) {
                circle = 0
            }
            
            //调用小圆圈变化函数
            circleChange()
        }
    })
    
    //左侧按钮点击事件
    arrowl.addEventListener('click', function() {
        if (flag) {
            flag = false //关闭节流阀
            
            //如果走到了第一张图片
            if (num == 0) {
                num = ul.children.length - 1
                ul.style.left = -num * focuswidth + 'px'
            }
            
            num--
            animate(ul, -num * focuswidth, function() {
                flag = true //打开节流阀
            })
            
            //小圆圈变化
            circle--
            if (circle < 0) {
                circle = ol.children.length - 1
            }
            
            //调用小圆圈变化函数
            circleChange()
        }
    })
    
    //小圆圈变化函数
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = ''
        }
        ol.children[circle].className = 'current'
    }
 
    //自动播放功能,定时器
    var timer = setInterval(function() {
        //手动调用点击事件
        arrowr.click()
    }, 2000)
})
