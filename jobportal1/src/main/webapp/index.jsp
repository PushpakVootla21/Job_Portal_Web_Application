<%@ page import="com.DB.DBConnect" %>
<%@ page import="java.sql.Connection" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Job Portal</title>
<%@ include file="all_component/allcss.jsp"%>
<style type="text/css">
.back-img {
	background: url("img/img-home-1.png");
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
</head>
<body>
	<%@ include file="all_component/navbar.jsp"%>
	
	

	<div class="container-fluid back-img">
		<div class="text-center">
			<h1 class="text-black p-5">
				<i class="fa fa-book" aria-hidden="true"></i> Online Job Portal
			</h1>
		</div>
	</div>
	<%@ include file="all_component/footer.jsp"%>
</body>
</html>