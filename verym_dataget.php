<?php
	function dataGet($url){		
		//$data=array();
		$string_re='';
		$ori_url=$url;
		if(strpos($url,'verym.com/gonglve/')!==FALSE||strpos($url,'/gl_')!==FALSE||preg_match('/zixun\/\d+\./',$url)!==0){//是否符合抓取模型
			$url=str_replace('m.verym.com','www.verym.com',$url);//把手机端链接替换未web链接
			$string=file_get_contents($url);
			preg_match_all('/发表于(\d{4})年(\d{2})月(\d{2})日/',$string,$matches);
			$date=$matches[1][0].'-'.$matches[2][0].'-'.$matches[3][0];
			//echo '日期为：'.$date.'<br>';
			preg_match_all('/time\"\>(\d\d\:\d\d)\</',$string,$matches);
			$time=$matches[1][0];
			//echo '时间为：'.$time.'<br>';
			preg_match_all('/username\"\>([^\<]+)\</',$string,$matches);
			$username=$matches[1][0];
			//echo '用户为：'.$username.'<br>';
			// var_dump(preg_match_all('/\>编辑\：([^\<]+)\</',$string,$matches));
			//var_dump(preg_match_all('/\>编辑\：([^\<]+)\</',$string,$matches)===0);
			if(preg_match_all('/\>编辑\：([^\<]+)\</',$string,$matches)===FALSE||preg_match_all('/\>编辑\：([^\<]+)\</',$string,$matches)===0){
				$string_re.='这条链接没有编辑，用账号名替代,';
				$editor=$username;
			}else{
				$editor=$matches[1][0];
			}
			//echo '编辑为：'.$editor.'<br>';
			// $data['date']=$date;
			// $data['time']=$time;
			// $data['username']=$username;
			// $data['editor']=$editor;
			// return $data;
			//$string_re.='链接为：'.$ori_url.'，编辑为：'.$editor.'，发布日期为：'.$date.'<br>';
			$string_re.=$editor.'<br>';	
		}else{
			$string_re='此链接为新的类型，请查询<br>';	
		}
		//echo $string_re;
		return $string_re;
	}
	$string_response='';
	$urlString=$_GET['url'];
	//var_dump($urlString);
	$urlString=json_decode($urlString);
	//var_dump($urlString);
	for($i=0;$i<sizeof($urlString);$i++){
		$url[$i]=$urlString[$i];
		//$string_response.=($i+1).'、'.dataGet($url[$i]);
		$string_response.=dataGet($url[$i]);
		sleep(1);
		//var_dump($string_response);
	}
	echo $string_response;
	//echo '用户为：'.$data['username'].'<br>';
	// $string=file_get_contents($url);
	// preg_match_all('/发表于(\d{4})年(\d{2})月(\d{2})日/',$string,$matches);
	// $date=$matches[1][0].'-'.$matches[2][0].'-'.$matches[3][0];
	// echo '日期为：'.$date.'<br>';
	// preg_match_all('/time\"\>(\d\d\:\d\d)\</',$string,$matches);
	// $time=$matches[1][0];
	// echo '时间为：'.$time.'<br>';
	// preg_match_all('/username\"\>([^\<]+)\</',$string,$matches);
	// $username=$matches[1][0];
	// echo '用户为：'.$username.'<br>';
	// preg_match_all('/编辑\：([^\<]+)\</',$string,$matches);
	// $editor=$matches[1][0];
	// echo '编辑为：'.$editor.'<br>';
	//var_dump($matches);
?>