// JavaScript Document
window.onload=function(){
	//初始化echarts实例
	var myChart=echarts.init(document.getElementById('main'));
	//指定图表配置和数据
	var option = {
			title: {
					text:'myFirst',
					textStyle:{
							color:'#4b5352'
						}
				},
			tooltip:{},
			legend: {
					data:['销量']
				},
			xAxis: {
					data:["衬衫","羊毛衫","裤子","毛衣","皮鞋","靴子"]
				},
			yAxis: {},
			color:['pink'],
			series:[{
					name:'销量',
					type: 'bar',
					data:[5,20,18,10,20,10],
					itemStyle:{
							normal:{
									color:'#0888ea'
								}
						},
					barWidth:'20'
				},
				{
					name:'销量',
					type: 'line',
					data:[5,20,18,10,20,10],
					itemStyle:{
							normal:{
									color:'#05c8af'
								}
						}
				}]
		};
		//使用 option
		myChart.setOption(option);
	
}
