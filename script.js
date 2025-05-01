var tablinks=document.getElementsByClassName("tab-links");
	  var tabcontents=document.getElementsByClassName("tab-contents");
	  //define the function//
	  function opentab(tabname){
	  	for(tablink of tablinks){
	  		tablink.classList.remove("active-link");
	  	}
	  	for(tabcontent of tabcontents){
	  		tabcontent.classList.remove("active-tab");
	  	}
	  	event.currentTarget.classList.add("active-link");
	 document.getElementById(tabname).classList.add("active-tab");
	  }

	  //readmore Frontend Developer
	  function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

     //readmore QA Tester
 function myFunctionn() {
  var dot = document.getElementById("dot-m");
  var moreText = document.getElementById("moree");
  var btnText = document.getElementById("myBtn-2");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//To-do-list
function myFunctionnn() {
  var dot = document.getElementById("dot");
  var moreText = document.getElementById("morelist");
  var btnText = document.getElementById("myBtnlist");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//calculator
function myFunctioncalc() {
  var dot = document.getElementById("dot-2");
  var moreText = document.getElementById("morecalc");
  var btnText = document.getElementById("myBtncalc");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


//chat-App
function myFunctionchat() {
  var dot = document.getElementById("dot-3");
  var moreText = document.getElementById("morechat");
  var btnText = document.getElementById("myBtnchat");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}


function myFunctionpomo() {
  var dot = document.getElementById("dot-4");
  var moreText = document.getElementById("morepomo");
  var btnText = document.getElementById("myBtnpomo");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dot.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}