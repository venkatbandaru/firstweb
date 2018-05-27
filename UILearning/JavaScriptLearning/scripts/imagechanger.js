var imgSelector = document.querySelector("img");
imgSelector.onclick = function(){
	var mySrc = imgSelector.getAttribute("src");
	if(mySrc == "DSC00011.JPG"){
		imgSelector.setAttribute("src","DSC00007.JPG");
	}else{
		imgSelector.setAttribute("src","DSC00011.JPG");
	}
}
