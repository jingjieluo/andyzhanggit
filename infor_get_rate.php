<?php
    $arrayTest=array(
        array("2019-01","A",100,96),
        array("2019-01","B",100,96),
        array("2019-01","C",100,96),
        array("2019-02","A",60,59), 
        array("2019-02","B",60,59),
        array("2019-03","A",110,100)
    );
	$arrayCompare=array("2019-01","2019-02","2019-03");
	$arrayName=array("A","B","C");
	$target=array();
	for($i=0;$i<sizeof($arrayCompare);$i++){
		$target[$arrayCompare[$i]]=array();
		for($j=0;$j<sizeof($arrayName);$j++){
			echo "test";
			$target[$arrayCompare[$i]][$j]=array($arrayName[$j],0,0);
		}
	}
    for($i=0;$i<sizeof($arrayTest);$i++){
		for($j=0;$j<sizeof($arrayName);$j++){
			if($target[$arrayTest[$i][0]][$j][0]==$arrayTest[$i][1]){
				$target[$arrayTest[$i][0]][$j][1]=$arrayTest[$i][2];
				$target[$arrayTest[$i][0]][$j][2]=$arrayTest[$i][3];
			};
		}
	}
	var_dump($target);


	
	//var_dump($arrayCompare[0]);
	//希望得到的数据
	// $target=array(
	// 	"2019-01"=>array(
	// 		array("A",100,96),
	// 		array("B",100,96),
	// 		array("C",100,96)
	// 	),
	// 	"2019-02"=>array(
	// 		array("A",60,59),
	// 		array("B",60,59),
	// 		array("C",0,0)
	// 	),
	// 	"2019-01"=>array(
	// 		array("A",110,110),
	// 		array("B",0,0),
	// 		array("C",0,0)
	// 	)
	// );

	// SELECT DATE_FORMAT(date_time, '%Y-%m') date,counselor '客服',COUNT(phones='已留联系方式' OR null)/COUNT(phones) '留电转化率',COUNT(phones='已留联系方式' OR null) '留电人数',COUNT(phones) '咨询总人数' FROM `user_dialogue` WHERE (DATE(date_time)>DATE('2018-05-01')) GROUP BY 1,`counselor`
?>