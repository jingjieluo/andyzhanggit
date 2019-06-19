<?php
    //php常用例子库
    $curl;
    
    //-----------------多为数组转换示例-----------------
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
	for($i=0;$i<sizeof($arrayCompare);$i++){//默认数值赋值为0
		$target[$arrayCompare[$i]]=array();
		for($j=0;$j<sizeof($arrayName);$j++){
			echo "test";
			$target[$arrayCompare[$i]][$j]=array($arrayName[$j],0,0);
		}
	}
    for($i=0;$i<sizeof($arrayTest);$i++){//查找比对数据,如果找到,替换值
		for($j=0;$j<sizeof($arrayName);$j++){
			if($target[$arrayTest[$i][0]][$j][0]==$arrayTest[$i][1]){
				$target[$arrayTest[$i][0]][$j][1]=$arrayTest[$i][2];
				$target[$arrayTest[$i][0]][$j][2]=$arrayTest[$i][3];
			};
		}
	}
    var_dump($target);
    //希望得到的数据,
	$target=array(
		"2019-01"=>array(
			array("A",100,96),
			array("B",100,96),
			array("C",100,96)
		),
		"2019-02"=>array(
			array("A",60,59),
			array("B",60,59),
			array("C",0,0)
		),
		"2019-01"=>array(
			array("A",110,110),
			array("B",0,0),
			array("C",0,0)
		)
	);
    


?>