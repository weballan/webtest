function getId(id){   //获到ID	return document.getElementById(id);}function firstCls(cls){    //获取第一个class	return document.getElementsByClassName(cls)[0];}function firstElement(ele){   //获取第一个元素	return document.getElementsByTagName(ele)[0];}function formatNumber(n){   //数字小于10前面就加0	n = n.toString();	return n[1] ? n : '0' + n}function formatTime(date){   //时间格式化	const year=date.getFullYear(),		month=date.getMonth()+1,		day=date.getDate();	return [year,month,day].map(formatNumber).join('-');}