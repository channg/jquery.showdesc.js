<h1>jquery.showdesc.js</h1>

鼠标浮动 显示扩展信息插件

![image](https://github.com/zhiwenxue/jquery.showdesc.js/blob/master/screenshots/image1.png?raw=true)

鼠标移动上可显示信息，如图
<h3>示例代码</h3>
```
$("#tesct_div").descshow({
			height:100,width:100, 
			borderColor:'gray',
			borderWidth:2,
			backgroundColor:'white',
			arrowLenght:10,
			content:'hahahahahahahahhahahahahah',
			appendContext:function(event){
				event.append("<h1>hahah</h1>")
			}

		});
```