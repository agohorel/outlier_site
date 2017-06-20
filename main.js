// nav

var logo = document.querySelector("#header-logo");
var navbar = document.querySelector(".navbar-default"); 
var logoText = document.querySelector(".navbar-brand");

logo.addEventListener("mouseover", function(){
	navbar.style.height = "100px";
	logoText.style.fontSize = "0px";
	logoText.style.color = "#d3d3d3";

});

logo.addEventListener("mouseout", function(){
	navbar.style.height = "50px";
	logoText.style.fontSize = "18px";
	logoText.style.color = "#777777";
});

// artists

	var artistName = document.getElementsByClassName("artistName");

	for (var i = 0; i < artistName.length; i++) {
		artistName[i].addEventListener("click", function(){
		this.classList.toggle("artistClicked");
		});
	}
