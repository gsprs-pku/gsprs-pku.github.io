---
layout: page
permalink: /home/
---

<html lang="en">
 
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 721px;
            height: 455px
        }
        
        .focus {
            position: relative;
            width: 721px;
            height: 455px;
            background-color: black;
            padding-left: 0px;
            overflow: hidden;
        }
        /* 父盒子宽度比较小，而liimg里面加起来宽度很大，不能一行显示，就会竖着显示 */
        /* 解决：把ul的宽度设置的大一点 */
        
        .focus ul li {
            float: left;
            list-style: none;
        }
        
        .focus ul {
            width: 400%;
            position: absolute;
            left: 0px;
            top: 0px;
            margin: 0px;
            padding: 0px
        }
        
        .arrow-l,
        .arrow-r {
            /* display: none; */
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 50%;
            margin-top: -20px;
            width: 24px;
            height: 24px;
            text-decoration: none;
            z-index: 7;
            color: white;
            text-align: center;
            line-height: 24px;
        }
        
        .arrow-l {
            left: 0px;
        }
        
        .arrow-r {
            right: 0px
        }
        
        .circle {
            width: 90px;
            height: 40px;
            position: absolute;
            bottom: 0px;
            left: 245px;
            /* margin: 0px;
            padding: 0px; */
            z-index: 1;
            text-align: center;
            line-height: 40px;
        }
        
        .circle li {
            width: 30px;
            height: 30px;
            float: left;
            list-style: circle;
            color: white;
        }
        
        .circle .current {
            list-style: disc
        }
    </style>
    <script src="{{site.url}}/js/animate.js"></script>
    <!-- 注意顺序 -->
    <script src="{{site.url}}/js/index.js"></script>
</head>
 
<body>
    <div class="focus">
        <a href="javascript:;" class="arrow-l">←</a>
        <a href="javascript:;" class="arrow-r">→</a>
        <!-- 核心滚动区域 -->
        <!-- 要让所有图片排在一行显示，不要什么都用div解决 -->
        <ul>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/Lin_2025_WRR_1.png" alt=""></a>
				</li>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/Lin_2025_WRR_2.png" alt=""></a>
				</li>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/Song_2025_JGRES_cover.png" alt=""></a>
				</li>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/slumgullion_sar_2018_modified_compressed.jpg" alt=""></a>
				</li>
			 	<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/SLV_aquifer_compressed.jpg" alt=""></a>
				</li>
				<li>
					<a href="#"><img src="{{site.url}}/imgs/research_images/slumgullion_oli_2019268_modified_compressed.png" alt=""></a>
				</li>
        </ul>
        <ol class="circle">
 
        </ol>
    </div>
</body>
 
</html>

We are the Natural Hazard Remote Sensing (NHRS) Lab at Peking University. We changed our lab name from Geological Hazards and Shallow Processes Remote Sensing (GSPRS) as now we are working on more general hazards including extreme climate hazards. We focus on using remote sensing tools, e.g., Synthetic Aperture Radar (SAR), to characterize ground deformation and land alternations associated with natural hazards in terrestrial planets. We have been working on mapping, monitoring, and modeling landslides, aquifers, dams, mines, coasts, earthquakes, extreme precipitation events, etc. We are dedicated to investigating their natural or anthropogenic triggerings and environmental forcings using statistical, analytical, numerical models and artificial intelligence (AI). Our multidisciplinary research spans the fields of geomatics, geophysics, hydrology, geology, tectonics, climate change, civil and environmental engineering, and computer sciences.

We are always looking for highly motivated students and postdocs to join our lab. The application to <a href="https://postdocs.pku.edu.cn/tzgg/134998.htm" target="_blank"><i>Boya Postdoc Fellowship at Peking University</i></a> is due in early Spring and early Fall. We have interesting research data and topics to help strengthen your academic profile and career development! Candidates with strong interests are welcomed to contact PI Xie Hu.

<br>
<br>
<br>
