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
        * { margin: 0; padding: 0; }
        html, body { height: 100%; overflow: hidden; }
        .box { 
            width: 100%; 
            height: 100%; 
            position: absolute; /* 设置定位为绝对定位 */
            top: 0; /* 位于页面顶部 */
            left: 0; /* 位于页面左侧 */
        }
        video { 
            min-width: 100%; 
            min-height: 100%; 
            position: absolute; 
            top: 0; 
            left: 0; 
        }
        .content {
            position: absolute;
            z-index: 3;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            font-size: 24px;
            line-height: 1.5;
        }
        .button {
            position: absolute;
            z-index: 3;
            top: 80%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
        }
        .button a {
            text-decoration: none;
            background-color: #333;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="box">
        <video autoplay loop preload muted>
            <source src="/imgs/research_images/NewFenghuoshanRTS.mp4" type="video/mp4">
        </video>
    </div>
    <div class="content">
        We are the Natural Hazard Remote Sensing (NHRS) Lab at Peking University, focusing on using remote sensing tools to characterize land disturbances associated with natural hazards in terrestrial planets.
    </div>
    <div class="button">
        <a href="/home/">Learn more</a>
    </div>
</body>

</html>

