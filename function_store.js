//常用函数汇总

//xmlhttp
function xmlCreat(){
    var xmlhttp;
    if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest;
    }else{//code for IE5,IE6
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readystate==4 && xmlhttp.status==200){
            //code
        }
    }
}

//回调函数重新设置href
$("a").attr("href", function(i,origValue){
    return "http://www.baidu.com"+origValue; 
  });