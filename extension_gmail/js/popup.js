if(localStorage.email_check) {
	$("#email_check").val(localStorage.email_check);
	$("#result_order_numbers").val(localStorage.order_numbers_string);
	$("#result_tracking_numbers").val(localStorage.tracking_numbers_string);
}
var bgPage = chrome.extension.getBackgroundPage();
var gmail_test=document.getElementById('gmail_info');
gmail_test.onclick=function(){	
	bgPage.sendTest(function(orders){
		for(i=0;i<orders.order_numbers.length;i++)
		{	
			orders.emails[i]=orders.emails[i].replace(/id="/gi,"");
			orders.order_numbers[i]=orders.order_numbers[i].replace(/\>|\</gi,"");
			orders.tracking_numbers[i]=orders.tracking_numbers[i].replace(/\./gi,"");
		}
		var email_check=$("#email_check").val();
		localStorage.email_check=email_check;
		//alert(email_check);
		p=/\w+\@\d{3}\.\w{3}/gi;
		email_check=email_check.match(p);
		if(!email_check) alert("请输入邮箱");
		order_numbers_string="";
		tracking_numbers_string="";
			for(i=0;i<email_check.length;i++){
				var result_order_numbers=new Array,result_tracking_numbers=new Array;
				if(orders.emails.indexOf(email_check[i])!='-1'){
					position=orders.emails.indexOf(email_check[i]);						
					result_order_numbers[i]=orders.order_numbers[position];
					result_tracking_numbers[i]=orders.tracking_numbers[position];
				}
				else {
					result_order_numbers[i]="未找到订单号";
					result_tracking_numbers[i]="未找到快递单号";
				}
				order_numbers_string+=result_order_numbers[i]+"\n";
				tracking_numbers_string+=result_tracking_numbers[i]+"\n";
			}
		var result_order_numbers=document.getElementById('result_order_numbers');
		result_order_numbers.value=order_numbers_string;
		localStorage.order_numbers_string=order_numbers_string;
		var result_tracking_numbers=document.getElementById('result_tracking_numbers');
		result_tracking_numbers.value=tracking_numbers_string;
		localStorage.tracking_numbers_string=tracking_numbers_string;	
	});	
}
var copy_order_numbers=document.getElementById('copy_order_numbers');
copy_order_numbers.onclick=function(){
	document.getElementById('result_order_numbers').select();
  	document.execCommand("Copy");
  	alert("订单号已复制成功");
}
var copy_order_numbers=document.getElementById('copy_tracking_numbers');
copy_order_numbers.onclick=function(){
	document.getElementById('result_tracking_numbers').select();
  	document.execCommand("Copy");
  	alert("快递单号已复制成功");
}

// JD gc balance
jd_sum=document.getElementById('jd_balance_sum');
jd_sum.onclick=function(){
//jd_sum=$("#jd_balance_sum");
//jd_sum.click=function(){
	bgPage.jdGcSum(function(sum){
					$("#balance").text("京东余额："+sum.toFixed(2)+"元");
					}
		);
	}

/*
//amazon gift card code cut
var code_cut=document.getElementById('gc_cut');
code_cut.onclick=string_cut;
function string_cut()
{
var string=document.getElementById("email_check").value;
if(string.match(/\w{4}\-\w{6}\-\w{5}/g)!=null) p=/\w{4}\-\w{6}\-\w{5}/g;
	else { 
		if(string.match(/\w{4}\-\w{6}\-\w{4}/g)!=null) p=/\w{4}\-\w{6}\-\w{4}/g;
			else p=/\w{4}\-\w{4}\-\w{4}\-\w{4}/g
	}
var string_array=string.match(p);
var code_cut="";
for(var i=0;i<string_array.length;i++){
  	code_cut+=string_array[i]+"\n";
  	}
document.getElementById("result_order_numbers").value=code_cut;
  //document.getElementById("string").select();
  //document.execCommand("Copy");
  //alert("礼品卡已经复制到剪切板");
}

//order shipped emails
var tracking_check=document.getElementById('amazon_us_tracking');
tracking_check.onclick=function(){
	bgPage.trackCheck(function(orders)){
		for(i=0;i<orders.length;i++){
			
		}
		var result_order_numbers=document.getElementById('result_order_numbers');
		result_order_numbers.value=orders.;
		var result_tracking_numbers=document.getElementById('result_tracking_numbers');
		result_tracking_numbers.value=tracking_numbers_string;
	}
}*/