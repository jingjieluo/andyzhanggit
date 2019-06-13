<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>测试excel读取</title>
</head>
<body>
<?php
    include 'Classes/PHPExcel/IOFactory.php';
    $inputFileName = 'excel_test.xls';
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
    //$rowData[$i]= $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row, NULL, TRUE, FALSE);
    $i++;
    //这里得到的rowData都是一行的数据，得到数据后自行处理，我们这里只打出来看看效果
    }
    var_dump($rowData);
    echo "<br>";
    echo "test";
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