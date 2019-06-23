<?php
//php常用函数库
// SELECT b.editor_name '编辑',COUNT(a.phones) '咨询人数', COUNT(a.phones='已留联系方式' OR NULL) '留电人数'FROM `user_dialogue` as a,`page_infor` as b WHERE (a.url_refer=b.page_url AND a.date_time>DATE('2019-06-01')) GROUP BY b.editor_name 
// ORDER BY COUNT(a.phones) DESC

?>