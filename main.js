// artists

	var artistName = document.getElementsByClassName("artistName");

	for (var i = 0; i < artistName.length; i++) {
		artistName[i].addEventListener("click", function(){
		this.classList.toggle("artistClicked");
		});
	}
