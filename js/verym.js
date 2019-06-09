function editorGet(){
	urlString=$('#urlString').val();
	urlString=urlString.match(/\S+/g);
	urlString=JSON.stringify(urlString);
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
	    if (xmlhttp.readyState==4 && xmlhttp.status==200){
	 		document.getElementById("infor_show").innerHTML=xmlhttp.responseText;
	    }
	}
	xmlhttp.open("GET","verym_dataget.php?url="+urlString,true);
	xmlhttp.send();
}
console.log('test');
// var editor_submit=$('#editor_submit');
// editor_submit.onclick=function(){
// 	alert('test');
// 	editorGet();
// };