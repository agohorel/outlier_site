var logo = document.querySelector("#header-logo");

logo.addEventListener("mouseover", function(){
	document.querySelector(".navbar-default").style.height = "100px";
});

logo.addEventListener("mouseout", function(){
	document.querySelector(".navbar-default").style.height = "50px";
});

