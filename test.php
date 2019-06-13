<?php
	function dataGet($url){		
		//$data=array();
		if(strpos($url,'verym.com/gonglve/')!==FALSE||strpos($url,'/gl_')!==FALSE||strpos($url,'verym.com/zixun/')!==FALSE){//是否符合抓取模型
			str_replace('m.verym.com','www.verym.com',$url);//把手机端链接替换未web链接
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
			preg_match_all('/\>编辑\：([^\<]+)\</',$string,$matches);
			$editor=$matches[1][0];
			//echo '编辑为：'.$editor.'<br>';
			// $data['date']=$date;
			// $data['time']=$time;
			// $data['username']=$username;
			// $data['editor']=$editor;
			// return $data;
			$string='编辑为：'.$editor.'<br>';	
		}else{
			$string='此链接未新的类型，请查询';	
		}
		return $string;

	}
	$string='';
	$urlString=$_GET['urlString'];
	$urlString=json_decode($urlString);
	for($i=0;$i<sizeof($urlString);$i++){
		$url[$i]=$urlString[$i];
		$data=dataGet($url);
	}
	echo $string;
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
	//**************************
	//获取指定周的第一天
	function weekday($yearWeek){
		$year=substr($yearWeek,0,4);
		$week=substr($yearWeek,5);
        $year_start = mktime(0,0,0,1,1,$year);  
        $year_end = mktime(0,0,0,12,31,$year);        
        // 判断第一天是否为第一周的开始  
        if (intval(date('W',$year_start))===1){  
            $start = $year_start;//把第一天做为第一周的开始  
        }else{  
            $week++;  
            $start = strtotime('+1 monday',$year_start);//把第一个周一作为开始  
        }             
        // 第几周的开始时间  
        if ($week===1){  
            $weekday['start'] = $start;  
        }else{  
            $weekday['start'] = strtotime('+'.($week-1).' monday',$start);  
        }             
        // 第几周的结束时间  
        $weekday['end'] = strtotime('+1 sunday',$weekday['start']);  
        if (date('Y',$weekday['end'])!=$year){  
            $weekday['end'] = $year_end;  
        }
        $weekday['start']=date("Y-m-d",$weekday['start']);
        $weekday['end']=date("Y-m-d",$weekday['end']);
        return $weekday;  
    }  
?>