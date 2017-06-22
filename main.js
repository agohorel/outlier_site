// nav

var logo = document.querySelector("#header-logo");
var navbar = document.querySelector(".navbar-default"); 
var logoText = document.querySelector(".navbar-brand");
var body = document.querySelector("body");

logo.addEventListener("mouseover", function(){
	navbar.style.height = "100px";
	logoText.style.fontSize = "0px";
	logoText.style.color = "#d3d3d3";
	body.style.paddingTop = "100px";

});

logo.addEventListener("mouseout", function(){
	navbar.style.height = "50px";
	logoText.style.fontSize = "18px";
	logoText.style.color = "#777777";
	body.style.paddingTop = "50px";
});

// artists

var artistName = document.getElementsByClassName("artistName");

for (var i = 0; i < artistName.length; i++) {
	artistName[i].addEventListener("click", function(){
		this.classList.toggle("artistClicked");
	});
}


// podcast

// Get the modal
var modal = document.getElementById('modal001');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('audioPlayerImg');
var modalImg = document.getElementById("img001");

for (var i = 0; i < img.length; i++){
	img.onclick = function(){
	    modal.style.display = "block";
	    modalImg.src = this.src;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
