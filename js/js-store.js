//邮政清关状况查询，string 输入单号
string='';
string=string.match(/CD\d+JP/g);
var i=0;
var stringResult='';
function inforGet(){
	if(i<string.length){
		$('#yjhm').val(string[i]);
		$('#btn_query_email').click();
		//console.log(string[i]);
		setTimeout(function(){
		stringResult+=string[i]+'\t'+$('tbody tr td')[$('tbody tr td').length-4].innerText+'\t'+$('tbody tr td')[$('tbody tr td').length-3].innerText+'\n';
		i++;
		inforGet();
		},5*1000);
	}else{
		console.log(stringResult);
	}
}
inforGet();