window.addEventListener('load',function(){
	//1.获取元素
	var left = document.querySelector('.left');
	var right = document.querySelector('.right');
	var main = document.querySelector('.main');
	var mainWidth = main.offsetWidth;
	//2.鼠标经过显示左右按钮
	main.addEventListener('mouseenter',function(){
		left.style.display = 'block';
		right.style.display = 'block';
		clearInterval(timer);
		timer = null; // 清除定时器变量
	})
	//3.鼠标离开隐藏左右按钮
	main.addEventListener('mouseleave',function(){
		left.style.display = 'none';
		right.style.display = 'none';
		timer = setInterval(function() {
			//手动调用点击事件
			right.click();
		}, 2000);
	})
	//4.动态生成圆圈
	var ul = main.querySelector('ul')
	var ol = main.querySelector('.circle')
	for (var i = 0; i < ul.children.length; i++) {
		//创建一个li
		var li = document.createElement('li'); 
		// 记录当前小圆圈的索引号 通过自定义属性来做 
		li.setAttribute('index', i);
		//插入ol
		ol.appendChild(li);
		//排他思想
		li.addEventListener('click', function() {
			//所有li清除类名
			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = '';
			}
			//当前li设置current类名
			this.className = 'current';
			var index = this.getAttribute('index');
			 // 当我们点击了某个小li 就要把这个li 的索引号给 num  
			num = index;
			// 当我们点击了某个小li 就要把这个li 的索引号给 circle  
			circle = index;
			// 5. 点击小圆圈，移动ul 
			animate(ul, -index * mainWidth);
		})
	}
	//第一个小li设置为current
	ol.children[0].className = 'current';
	// 克隆第一张图片(li)放到ul 最后面
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 6.点击右按钮，图片滚动一张
	var num = 0;
	 // circle 控制小圆圈的播放
	var circle = 0;
	var flag = true;
	// 7.右侧按钮
	right.addEventListener('click',function(){
	if(flag){
		//关闭节流阀
			flag = false;
			if(num == ul.children.length-1){
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -num*mainWidth,function(){
				//打开节流阀
				flag = true;
			});
			circle++;
			if (circle == ol.children.length) {
				circle = 0;
			}
			// 调用函数
			circleChange();
		}
	});
	// 8.左侧按钮
	left.addEventListener('click',function(){
	if(flag){
			flag = false;
			if(num == 0){
				num = ul.children.length - 1;
				ul.style.left = -num * mainWidth + 'px';
			}
			num--;
			animate(ul, -num*mainWidth, function(){
				flag = true;
			});
			circle--;
			if (circle < 0) {
				circle = ol.children.length - 1;
			}
			// 调用函数
			circleChange();
		}
	});
	function circleChange() {
		// 先清除其余小圆圈的current类名
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		// 留下当前的小圆圈的current类名
		ol.children[circle].className = 'current';
	}
	// 自动播放轮播图
	var timer = setInterval(function() {
		//手动调用点击事件
		right.click();
	}, 2000);
})
