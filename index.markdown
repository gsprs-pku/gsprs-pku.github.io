---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="style.css">
<title>explem</title>
</head>
<body>
	<div class="box">
		<img id="change" src="../image1.png" alt="" />
		<div id="imgText" class="text"></div>
		<ul id="num" class="imgBottom">
			<li class onClick="jump(0)" >1</li>
			<li class onClick="jump(1)" >2</li>
			<li class onClick="jump(2)" >3</li>

		</ul>
		<a class="left" href="#" onclick="last();" ><</a>
		<a class="right" href="#" onclick="next();" >></a>
	</div>
	<script>
		var image = new Array();			//声明数组用来存储要轮播图片的地址
		image[0] = "imgs/research_images/slumgullion_sar_2018_modified_compressed.png";			//为数组中每一个元素赋值图片的地址
		image[1] = "imgs/research_images/Slumgullion_landscape_compressed.png";
		image[2] = "imgs/research_images/slumgullion_oli_2019268_modified_compressed.png";
		
		var introduce = new Array();		//声明数组用来存储要文字内容
		introduce[0] = "";//为数组中每一个元素赋值的文字内容
		introduce[1] = "";
		introduce[2] = "";

		document.getElementById("change").src = image[0];//初始化图片
		document.getElementById("imgText").innerHTML = introduce[0];//初始化文字内容
		var items = document.getElementById("num").getElementsByTagName("li");//定义序号数组
		items[0].className = "active";//初始化序号
		var i = -1;							//用来迭代图片次序的变量
		function changeImg(){				//定义更改img标签中src属性的函数	
			i = (i + 1) % image.length;		//递增变量，用来指向下一张图片,并使变量不大于图片的数量
			document.getElementById("change").src = image[i];//更改src属性
			document.getElementById("imgText").innerHTML = introduce[i];//更改文字内容
			exI();
		}
		var b = self.setInterval("changeImg()", 3000);//定时执行函数
		function last(){
			self.clearInterval(b);						//清除计时
			i = (i + image.length - 1) % image.length;	//对变量进行递减操作	
			document.getElementById("change").src = image[i];//替换图片
			document.getElementById("imgText").innerHTML = introduce[i];//替换文字内容
			exI();
			b = self.setInterval("changeImg()", 3000);
		}
		function next(){
			self.clearInterval(b);
			i = (i + 1) % image.length;	
			document.getElementById("change").src = image[i];
			document.getElementById("imgText").innerHTML = introduce[i];
			exI();
			b = self.setInterval("changeImg()", 3000);
		}
		function jump(k){//接收li标签的位置
			self.clearInterval(b);//清除计时
			i = k;//将选中的序号赋值给i
			document.getElementById("change").src = image[i];//替换图片
			document.getElementById("imgText").innerHTML = introduce[i];//替换文字内容
			exI();//改变序号显示
			b = self.setInterval("changeImg()", 3000);//重新开始计时
		}
		function exI(){
			for(var j = 0; j < items.length; j++){
				items[j].className = "";
				if(i == j)
					items[i].className = "active";
			}
		}
	</script>
</body>
</html>

We are the Geohazards and Shallow Processes Remote Sensing Lab (GSPRS) at Peking University. We focus on using remote sensing tools, e.g., Synthetic Aperture Radar (SAR), to characterize ground deformation and land alternations associated with geohazards and surface processes in terrestrial planets. We have been working on mapping, monitoring, and modeling landslides, aquifers, dams, mines, coasts, earthquakes, extreme precipitation events, etc. We are dedicated to investigating their natural or anthropogenic triggerings and environmental forcings using statistical, analytical, numerical models and artificial intelligence (AI). Our multidisciplinary research spans the fields of geomatics, geophysics, hydrology, geology, tectonics, climate change, civil and environmental engineering, and computer science.

We are always looking for highly motivated students and postdocs to join our lab. Please contact PI Xie Hu if you are interested.

**NEWS**

<body>
    <p>The next application to <a href="https://postdocs.pku.edu.cn/tzgg/134998.htm" target="_blank"><i>Boya Postdoc Fellowship at Peking University</i></a> is due in mid-October. We have interesting research data and topics to help strengthen your academic profile and career development! The package includes good benefits in housing and healthcare as well as the national leading educational resources for kids.</p>
    <br>
    <table>
        <tbody>
            <tr>
                <td>9/2022</td>
                <td>Xie obtained the <a href="https://eos.org/agu-news/2022-agu-section-awardees-and-named-lecturers" target="_blank">2022 AGU Natural Hazards Early Career Award</a>. Read <a href="https://mp.weixin.qq.com/s/YTeDEQdhrV15d6SxjbNf-w" target="_blank"><i>News</i></a>!</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Xiao was awarded the 3-minute thesis/dissertation competition at the University of Houston. Big Congrats!</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Yuqi and Penghui officially started their graduate program at PKU. Big Welcome!</td>
            </tr>
            <tr>
                <td>8/2022</td>
                <td>Xiao published her <a href="https://doi.org/10.1029/2022GL099119" target="_blank"><i>GRL</i></a> paper on quantifying large-scale snow depth during the winter storm and national major disaster across Texas in Feb. 2022 using SAR scenes and machine learning methods. Big Congrats!</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Xie co-hosted the Hydroclimate Hazards section and Xiao gave a talk in 2022 CYWater on 8/28.</td>
            </tr>
            <tr>
                <td>7/2022</td>
                <td>Yongxuan Ran (undergrad from Wuhan University) and Yiling Lin (undergrad from Beijing Normal University) joined the GSPRS lab and will start their graduate program officially next fall.</td>
            </tr>
            <tr>
                <td>5/2022</td>
                <td>Our 2022 EGU session <a href="https://meetingorganizer.copernicus.org/EGU22/session/43347" target="_blank"><i>Remote Sensing Big Data Analysis and Applications in Geoscience</i></a> leading by <a href="https://research.utwente.nl/en/persons/ling-chang" target="_blank">Dr. Ling Chang</a> from ITC, <a href="https://www.gfz-potsdam.de/en/staff/mahdi.motagh" target="_blank">Dr. Mahdi Motagh</a> from GFZ, <a href="https://www.tudelft.nl/en/ceg/about-faculty/departments/geoscience-remote-sensing/staff/scientific-staff/profdrir-rf-ramon-hanssen/" target="_blank">Dr. Ramon Hanssen</a> from Delft, <a href="https://www.professoren.tum.de/en/zhu-xiaoxiang/" target="_blank">Dr. Xiaoxiang Zhu</a> from TUM, and Dr. Xie Hu from PKU held successfully. Xiao, Yuqi, and Xie gave their presentations.</td>
            </tr>
            <tr>
                <td>4/2022</td>
                <td>We invited Dr. Lin Liu from CNHK to give a virtual talk on 4/26.</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Chao's paper on landslide hazard mapping in the Three Gorges Reservoir Area was published in <a href="https://doi.org/10.1007/s10346-021-01796-1" target="_blank"><i>Landslides</i></a>.</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Penghui joined the lab as a Research Assistant.</td>
            </tr>
            <tr>
                <td>2/2022</td>
                <td>Awarded the PAZ's satellite imagery program: Joint DLR-INTA Scientific Announcement of Opportunity.</td>
            </tr> 
            <tr>
                <td>1/2022</td>
                <td>Awarded JAXA's satellite imagery program: The 3rd Research Announcement on the Earth Observations.</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Qingyu started his PhD program at the Southern Methodist University.</td>
            </tr>
            <tr>
                <td>&nbsp;</td> 
                <td>Invited talk in the Forum of Satellite Gravity and Hydrology on 1/15.</td>
            </tr>
            <tr>
                <td> 12/2021 </td>
                <td> Welcome to our AGU poster on the crustal surgery in Yan'an (NH15D-0488) and the 2021 Texas winter storm (GG45B-0411)!</td>
            </tr>
            <tr>
                <td> 11/2021 </td>
                <td>Our paper on machine-learning characterization of the natural and anthropogenic sources of ground deformation in California was published in <a href="https://doi.org/10.1029/2021JB022373" target="_blank"><i>JGR</i></a>.</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Our paper on elastic stress perturbations relating to the 2020 M5.7 Magna earthquake from centrurial industrial mine waste transport and surface water variations was accepted by <a href="https://meetingorganizer.copernicus.org/EGU22/session/43347" target="_blank"><i>JGR</i></a>.</td>
            </tr>
            <tr>
                <td> 10/2021 </td>
                <td>Our paper on the unprecedented mountain excavation and city construction in Yan'an China was published in <a href="https://doi.org/10.1029/2021GL095230" target="_blank"><i>GRL</i></a>.</td>
            </tr>
            <tr>
                <td>9/2021</td>
                <td>Virtual seminar talk at UTIG - UT Austin.</td>
            </tr>
            <tr>
                <td>8/2021</td>
                <td>Our paper on the shift of hydrological forcing in the movements of Guobo Slope besides the Laxiwa hydropower station in China was published in <a href="https://doi.org/10.1016/j.rse.2021.112664" target="_blank"><i>RSE</i></a>.</td>
            </tr>
            <tr>
                <td>7/2021</td>
                <td>I moved to Peking University. I'm grateful for all help and kindness from the teams that I was in.</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Ground-based InSAR survey at the Slumgullion landslide, CO.</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Talk in 2021 CYWater.</td>
            </tr>
            <tr>
                <td>6/2021</td>
                <td>Poster presentation in FRINGE 2021.</td>
            </tr>
            <tr>
                <td>5/2021</td>
                <td>Our paper on phase unwrapping in extraordinary high-gradient scenarios such as at the Slumgullion landslide was published in <a href="https://doi.org/10.1109/TGRS.2021.3081039" target="_blank"><i>IEEE Transactions on Geoscience and Remote Sensing</i></a>.</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Seminar talks.</td>
            </tr>
            <tr>
                <td>4/2021</td>
                <td>Our 2021 vEGU session NH6.2 : SAR remote sensing for anthropogenic and natural hazards was held successfully.</td>
            </tr>
            <tr>
                <td>&nbsp;</td>
                <td>Delighted to join the Editorial Board of <a href="https://www.springer.com/journal/24" target="_blank"><i>Pure and Applied Geophysics</i></a>. Welcome to submit!</td>
            </tr>
            <tr>
                <td>3/2021</td>
                <td> Awarded NASA New (Early Career) Investigator Program (NIP) in Earth Science. Read <a href="https://www.egr.uh.edu/news/202103/hu-earns-nasa-funding-award" target="_blank"><i>News</i></a>!</td>
            </tr>
            <tr>
                <td>2/2021</td>
                <td>Our paper led by Dr. Guoqiang Shi on decadal spatiotemporal ground deformation in response to the restrictions of groundwater pumping in Suzhou, China was published in <a href="https://doi.org/10.1016/j.rse.2021.112327" target="_blank"><i>RSE</i></a>.</td>
            </tr>
            <tr>
                <td>1/2021</td>
                <td>Seminar talks.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <br>
    <br>
    <br>
</body>
