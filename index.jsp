<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<body>
<!--  below div use to display captcha image -->
<div id="imgCaptchaPlace"></div>

<!-- below textfield where user enter captcha value -->
<input type="text" id="captchaText" onchange="chaeckCpatch(this.id);"/>

<!-- include this JS file -->
<script src="captchByAarif.js" type="text/javascript"></script>
</body>
</html>