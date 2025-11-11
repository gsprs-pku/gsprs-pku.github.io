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
        }, 1000)
    })
 
    //3、动态生成小圆圈
    var ol = document.querySelector('.circle')
    var ul = focus.querySelector('ul') //只选focus下面的ul
        //得到li的个数
    for (var i = 0; i < ul.children.length; i++) {
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
                //点击小圆圈，实现图片滑动的效果，此时用到animate动画函数（注意因为index.js依赖animate.js所以，animate.js要写道index.js上面
                //使用动画函数的前提，该元素必须有定位
                //注意是ul在移动，而不是li在移动
                //小圆圈的索引号乘以图片的宽度，作为ul移动的距离注意是负值
                //当点击了某个li，就拿到当前li的索引号
            var b = this.getAttribute('index')
                //当点击某个li，就要把li的索引号值给num
            num = parseInt(b) //注意要转换为数值型，因为num声明的是一个全局变量，所以可以这样赋值
            console.log(num) //关键在于小圆圈索引号
            animate(ul, -b * focuswidth)
        })
    }
 
    //把ol里面的第一个li设置为current类;默认第一张图选中
    ol.children[0].className = 'current'
        //5、点击右侧按钮一次，图片移动一张
 
    // var flag = 0 //变量一定是一个全局变量
    // arrowl.addEventListener('click', function() {
    //     flag++
 
    //     //如果点击箭头，没有效果可能是前面a的href没有改，因为是a链接，一点击就会刷新页面
    //     if (flag <= 2) {
    //         animate(ul, -flag * focuswidth)
    //             //修改小圆圈,排他
    //         for (var i = 0; i < ol.children.length; i++) {
    //             ol.children[i].className = ''
    //         }
    //         ol.children[flag].className = 'current'
    //     }
    //     if (flag == 3) {
    //         // flagr = 2
    //         //要实现无缝滚动
    //         flag = 0
 
    //         ul.style.left = 0 + 'px' //这样设置的话，会看到一个突然的跳变效果，最好是赋值一份显示。当在此点击就立马跳到第一张，这样就没有跳变的效果了
    //         for (var i = 0; i < ol.children.length; i++) {
    //             ol.children[i].className = ''
    //         }
    //         ol.children[0].className = 'current'
    //     }
 
    // })
 
    // arrowr.addEventListener('click', function() {
    //         flag = flag - 1
    //         console.log(flag)
    //         if (flag >= 0) {
    //             animate(ul, -flag * focuswidth)
    //                 //修改小圆圈,排他
    //             for (var i = 0; i < ol.children.length; i++) {
    //                 ol.children[i].className = ''
    //             }
    //             ol.children[flag].className = 'current'
    //         }
    //         if (flag < 0) {
    //             flag = 2
    //             console.log(flag)
    //             ul.style.left = -2 * focuswidth + 'px'
    //             for (var i = 0; i < ol.children.length; i++) {
    //                 ol.children[i].className = ''
    //             }
    //             ol.children[2].className = 'current'
    //         }
    //     }
    // )
 
    var nun = 0 //控制小圆圈的变化 直接换成num，这样就能实现小圆圈、箭头点击次数的联系
        //克隆第一张图片，放到ul最后面
    var frist = ul.children[0].cloneNode(true)
        //复制到ul最后
    ul.appendChild(frist) //这个克隆是写在了生成小圆圈的下面，所以克隆一份并不会影响小圆圈的数量
    var flag = true
    arrowr.addEventListener('click', function() {
            if (flag) {
                flag = false //关闭节流阀
                num = num + 1
 
                console.log(num)
                    //如果走到了最后复制的图片，ul要快速设置为0
                if (num <= 5) {
                    animate(ul, -num * focuswidth, function() {
                        flag = true //动画执行完毕，打开节流阀
                    })
                    nun++
                    //先清除全部的current的类名
 
                }
                if (num <= 2) {
 
                    for (var i = 0; i < ol.children.length; i++) {
                        ol.children[i].className = ''
                    }
                    //设置当前的类名
                    ol.children[num].className = 'current'
                }
                if (num == 5 || num == 6) {
 
                    //克隆图片,并滚动,//会不会多创建一个小圆圈
                    for (var i = 0; i < ol.children.length; i++) {
                        ol.children[i].className = ''
                    }
                    //设置当前的类名
                    ol.children[0].className = 'current'
                }
                //4就是图片的个数-1
                if (num == ul.children.length) {
                    flag = true
                        //快速设置left=0；回到第一张
                    ul.style.left = 0 + 'px'
                    num = 0
                        // for (var i = 0; i < ol.children.length; i++) {
                        //     ol.children[i].className = ''
                        // }
                        // //设置当前的类名
                        // ol.children[0].className = 'current'
                }
            }
 
        })
        //左侧按钮
    var num = 0
    arrowl.addEventListener('click', function() {
        if (flag) {
            flag = false
            num = num - 1
 
            console.log(num)
                //如果走到了最后复制的图片，ul要快速设置为0
            if (num == -1) {
                ul.style.left = -(ul.children.length - 1) * focuswidth + 'px'
                num = ul.children.length - 1
            }
            if (num >= 0) {
 
                animate(ul, -num * focuswidth, function() {
                    flag = true
                })
 
                //先清除全部的current的类名
 
            }
            if (num <= 2) {
                console.log(num)
 
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = ''
                }
                //设置当前的类名
                ol.children[num].className = 'current'
            }
        }
    })
 
    //自动播放功能,定时器
    var timer = setInterval(function() {
        //手动调用点击事件
        arrowr.click()
    }, 2000)
 
 
})
