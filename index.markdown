---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {margin: 0;padding: 0;}
        html, body {height: 100%;overflow: hidden;}
        .box {width: 1920px;height: 1080px;background-color: rgb(230, 134, 134);position: relative;}
        video {width: 100%;height: 100%;position: absolute;top: 0;left: 0;}
        .word {position: absolute;z-index: 3;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align: center; color: white;}
        .button {position: absolute;z-index: 3;top: 60%;left: 50%;transform: translateX(-50%);text-align: center;}
        .button a {text-decoration: none; background-color: #333; color: white; padding: 10px 20px; border-radius: 5px;}
    </style>
</head>
<body>
    <div class="box"><!-- autoplay 自动播放  loop循环播放  muted 声音 preload 预加载 -->
        <video autoplay loop muted="" preload><source src="imgs/research_images/test.mp4"></video>
        <div class="word">
            We are a research group at Peking University, focusing on the spatial and temporal dynamics, scaling, and organization of urbanization in China and their diverse ecological consequences.
        </div>
        <div class="button">
            <a href="/other/">Learn more.</a>
        </div>
    </div>
</body>
</html>

