<h1>jquery.showdesc.js</h1><h3>0.01</h3>

鼠标浮动 显示扩展信息插件<br/>
根据距离浏览器侧边框值最大的方向显示<br/>
可以根据ajax动态加载数据回调函数

![image](https://github.com/zhiwenxue/jquery.showdesc.js/blob/master/screenshots/GIF.gif?raw=true)

鼠标移动上可显示信息，如图
<h3>示例代码</h3>
```
$("#tesct_div").descshow({
				height:100,width:100, 
				borderColor:'gray',
				borderWidth:2,
				backgroundColor:'white',
				arrowLenght:10,
				content:'',
				space:10,
				leaveTime:500,
				direction:null,
				appendContext:function(event){
					event.append("<h1>一个不错的插件</h1>")
				}
		});
```
<h3>字段</h3>
*  height ：提示框宽度
*  width  ：提示框高度
*  leaveTime  ：鼠标离开leaveTime毫秒，提示框消失
*  borderColor：边框背景颜色
*  borderWidth：边框宽度
*  backgroundColor：背景颜色
*  space：提示距离目标对象位置
*  arrowLenght：小箭头边长
*  content：内容（直接加载）
*  direction:null：提示框朝向（top，bottom，left，right）不使用则选择距离边框最远的方向显示
*  appendContext：回调函数，当提示框出现调用
