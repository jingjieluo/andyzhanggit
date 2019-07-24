<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>测试excel读取</title>
</head>
<body>
<?php
    include 'Classes/PHPExcel/IOFactory.php';
    function sql_connect() {
        $servename="localhost";
        $username="andyzhang";
        $password="Sz123456";
        $dbName="verym_data";
        $conn=mysqli_connect($servename,$username,$password,$dbName);
        if(!$conn){
            die("<tr><td>数据库连接失败：".mysqli_connect_error()."</tr></td>");
        }
        mysqli_set_charset($conn,"utf8");
        return $conn;
    }
    $inputFileName = 'user_data_test.xlsx';
    date_default_timezone_set('PRC');
    // 读取excel文件
    try {
    $inputFileType = PHPExcel_IOFactory::identify($inputFileName);
    $objReader = PHPExcel_IOFactory::createReader($inputFileType);
    $objPHPExcel = $objReader->load($inputFileName);
    } catch(Exception $e) {
    die('加载文件发生错误：'.pathinfo($inputFileName,PATHINFO_BASENAME).':'.$e->getMessage());
    }
    // 确定要读取的sheet
    $sheet = $objPHPExcel->getSheet(0);
    $highestRow = $sheet->getHighestRow();
    $highestColumn = $sheet->getHighestColumn();
    // 获取一行的数据
    $rowData=array();
    $i=0;
    for ($row = 1; $row <= $highestRow; $row++){
    // Read a row of data into an array
    $rowData[$i]=array();
    $rowData[$i]= $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row);
    //$rowData[$i][0]= $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row, NULL, TRUE, FALSE);
    $i++;
    //这里得到的rowData都是一行的数据，得到数据后自行处理，我们这里只打出来看看效果
    }
    var_dump($rowData);
    //连接数据库
    $conn = sql_connect();
    for ($i= 1;$i < sizeof($rowData);$i++) {//第 0 行为表头，不录入
            $user_id = $rowData[$i][0][0];
            $first_date = $rowData[$i][0][1];
            $media_from = $rowData[$i][0][2];
            $register_date = $rowData[$i][0][3];
            $status = $rowData[$i][0][4];
            $team = $rowData[$i][0][5];
            $name = $rowData[$i][0][6];
            $hospital = $rowData[$i][0][7];
            //写入数据库：
            $sql = "INSERT IGNORE INTO `user_data_test` (`user_id`, `media_from`, `first_date`, `register_date`, `status`, `team`, `name`, `hospital`) VALUES ('$user_id', '$media_from', '$first_date', '$register_date', '$status', '$team', '$name', '$hospital')";
            echo $sql."<br>";
            if (!mysqli_query($conn, $sql)) {
                echo "错误：" + $sql + ";" + mysqli_error($conn) + "<br>";
            }
    }
    mysqli_close($conn);
    echo "数据已录入完成";
    // $data = array(); //下面是读取想要获取的列的内容
    // for ($rowIndex = 2; $rowIndex <= $allRow; $rowIndex++)
    // {
    //     $data[] = array(
    //         'id' => $cell = $currentSheet->getCell('A'.$rowIndex)->getValue(),
    //         'score' => $cell = $currentSheet->getCell('H'.$rowIndex)->getValue(),
    //         'ranking' => $cell = $currentSheet->getCell('I'.$rowIndex)->getValue(),
    //     );
    // }
?>
<body>
</html>