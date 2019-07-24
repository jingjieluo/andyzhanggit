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


//JS 定时点击

function clickAuto(i){
	var date=new Date();
	console.log(date+":第"+i+"次查询\n");
	$('#button-update-07').click();
	i++;
	if (i < 20) {
        setTimeout(function(){
            clickAuto(i);
        },30*1000);
	} else {
	alert('查询完毕');
    }
}
clickAuto(1);


//table页面数据动态修改
window.onload = function (e) {
    // 获取所有的单元格
    var td = document.getElementsByTagName("td");
    for (var i = 0; i < td.length; i++) {
        td[i].index = i;
        td[i].onclick = function (e) {
            if (e.target.tagName.toLowerCase() == "td") {
                var input = document.createElement("input");
                input.type = "text";
                input.className = "inputOne";
                input.value = this.innerHTML;
                td[this.index].innerHTML = "";
                td[this.index].appendChild(input);
                input.focus();
                input.onblur = function () {
                    this.parentNode.innerHTML = input.value;                                                            
                    input.remove();
                }
                阻止冒泡
                input.onclick = function (evt) {
                    evt = evt || window.event;
                    evt.stopPropagation() ? e.stopPropagation() : e.cancelBubble = true;                        
                }
            }
        };
    }
}


function sum(...rest) {
    var sumNum = 0;
    if(rest.length == 0) {
        return 0;
    } else {
        for(i = 0;i < rest.length;i++) {
            sumNum += rest[i];
        }
        return sumNum;
    }
 }
 function area_of_circle(r, pi) {
    var pi = pi || 3.14;
    return r*r*pi;

 }


 //闭包函数举例
 var scope;
function checkscope(){
    scope = "local scope";
    return (function (scope){
        //console.log(n);
		return function (){
			return scope+'2';
		}
    })(scope);
}
fn = checkscope();
scope = 'new scope'
fn();

var nAdd;
var t = () => {
    let n = 99;
    nAdd = () => {
        n++;
    };
    let t2 = () => {
        console.log(n);
    };
    return t2;
};

var a1 = t();
var a2 = t();
nAdd();
a1();    //99
a2();    //100
//我们会发现，n 的值都是从 99 开始，执行 一次a1() 的时候，值会加一，再执行一次，值再加一，但是 n 在 a1() 和 a2() 并不是公用的。你可以理解为：同一个函数形成的多个闭包的值都是相互独立的。
//当执行 var a1 = t()的时候，变量 nAdd 被赋值为一个函数 ，这个函数是function (){n++}，我们命名这个匿名函数为 fn1 吧。接着执行 var a = t()的时候，变量 nAdd 又被重写了，这个函数跟以前的函数长得一模一样，也是function (){n++}，但是这已经是一个新的函数了，我们就命名为 fn2 吧。所以当执行 nAdd 函数，我们执行的是其实是 fn2，而不是 fn1，我们更改的是 a2 形成的闭包里的 n 的值，并没有更改 a1 形成的闭包里的 n 的值。所以 a1() 的结果为 99 ，a2()的结果为 100。

//JS实现类似PHP的preg_match_all 函数功能
function pregMatchAll(exp, string) {
    let matches = [];
    matches[0] = string.match(exp);
    expString = "'" + exp + "'";
    for (i = 1;i < matches[0].length+1;i++) {
        exp.lastIndex = 0;
		matches[i] = [];
		//console.log(matches[0][i-1]);
        matchesTem = exp.exec(matches[0][i-1]);
		//console.log(matchesTem);
		countNum = expString.match(/\([^\)]+\)/g).length;
        for (j = 0;j < countNum;j++) {
			//console.log(matches[i]);
            matches[i][j] = matchesTem[j+1];
        }
    }
    return matches;
}
console.log(pregMatchAll(/^([^\s]+)\s+(\d+)\s+/gm, $('#inputText').val()));
console.log(pregMatchAll(/^[^\s]+\s+\d+\s+[^\s]+\s+(\d+)\s+(\d+)$/gm, $('#inputText').val()));