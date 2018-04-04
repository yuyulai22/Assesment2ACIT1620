var range1 = document.getElementById("range1"),
	range2 = document.getElementById("range2"),
	range3 = document.getElementById("range3"),
	range4 = document.getElementById("range4"),

	colorwheel = document.getElementById("colorwheel"),
	rangeButt = document.getElementById("rangeButt"),
	numButt = document.getElementById("numButt"),
	randButt = document.getElementById("rangeButt"),
	addButt = document.getElementById("rangeButt"),
	autoButt = document.getElementById("rangeButt"),
	stopButt = document.getElementById("rangeButt"),

	hair = document.getElementById("hair"),
	nose = document.getElementById("nose"),
	mouth = document.getElementById("mouth"),
	eyes = document.getElementById("eyes"),
	 disp = document.getElementById("display"),
	 prev = document.getElementById("preview"),

	haircount = 1,
	eyecount = 1, 
	nosecount = 1,
	mouthcount = 1;


// function changeColor(){
// 	curcolor = colorwheel.value;
// 	console.log(curcolor);
// 	prev.style.backgroundColor = curcolor;
// 	console.log("changecolor");
	
// };

// colorwheel.addEventListener("change", function(){	
// 	changeColor();
// });


document.getElementById("colorwheel").addEventListener("change", function(){
	prev.style.backgroundColor = colorwheel.value;
})


document.getElementById("range1").addEventListener("change", function(){
	hairval = range1.value;
	document.getElementById("hair").style.width = hairval + '%';


})

document.getElementById("range2").addEventListener("change", function(){
	eyeval = range2.value;
	document.getElementById("eyes").style.width = eyeval + '%';

	console.log(eyeval);
})

document.getElementById("range3").addEventListener("change", function(){
	noseval = range3.value;
	document.getElementById("nose").style.width = noseval + '%';

	console.log(noseval);
})

document.getElementById("range4").addEventListener("change", function(){
	mouthval = range4.value;
	document.getElementById("mouth").style.width = mouthval + '%';

	console.log(mouthval);
})

document.getElementById("hair").addEventListener("click", function(){
	if (haircount ==1){
		haircount =2;
		hair.src = "img/hair2.png"
		console.log("hair2")
	}
	else if (haircount ==2){
		hair.src = "img/hair3.png"
		haircount =3;
		console.log("hair3")
	}

	else if (haircount ==3){
		hair.src = "img/hair1.png"
		haircount =1;
		console.log("hair1")

	}		
})

document.getElementById("eyes").addEventListener("click", function(){
	if (eyecount ==1){
		eyecount =2;
		eyes.src = "img/eyes2.png"
		console.log("eye2")
	}
	else if (eyecount ==2){
		eyecount =3;
		eyes.src = "img/eyes3.png"
		console.log("eye3")
	}

	else if (eyecount ==3){
		eyecount =1;
		eyes.src = "img/eyes1.png"
		console.log("eye1")
	}
})

document.getElementById("nose").addEventListener("click", function(){
	if (nosecount ==1){
		nosecount =2;
		nose.src = "img/nose2.png"
		console.log("nose2")
	}
	else if (nosecount ==2){
		nosecount =3;
		nose.src = "img/nose3.png"
		console.log("nose3")
	}

	else if (nosecount ==3){
		nosecount =1;
		nose.src = "img/nose1.png"
		console.log("nose1")
	}	
})

document.getElementById("mouth").addEventListener("click", function(){
	if (mouthcount ==1){
		mouthcount =2;
		mouth.src = "img/mouth2.png"
		console.log("mouth2")
	}
	else if (mouthcount ==2){
		mouthcount =3;
		mouth.src = "img/mouth3.png"
		console.log("mouth2")
	}

	else if (mouthcount ==3){
		mouthcount =1;
		mouth.src = "img/mouth1.png"
		console.log("mouth1")
	}
})


document.getElementById("addButt").addEventListener("click", function(){
	
	createface();

})

document.getElementById("randButt").addEventListener("click", function(){
	
	randomFace();



})


 function createface(){
 	var ndiv = document.createElement("div");
 	ndiv.style.margin = "4px";
	ndiv.style.width = "100px";
	ndiv.style.height = "100px";

	var img1 = document.createElement("img");
	var img2 = document.createElement("img");
	var img3 = document.createElement("img");
	var img4 = document.createElement("img");

	ndiv.style.display = "inline-block";

	//img1.style = hair.style.cssText;
	img1.src = hair.src;
	img1.style.width = hair.style.width;
	img1.style.top = hair.style.top;
	//img1.style.display = "block";
	//img1.style = hair.style.cssText;

	//img2.style = eyes.style.cssText;
	img2.src = eyes.src;
	img2.style.width = eyes.style.width;
	img2.style.top = eyes.style.top;
	//img2.style.display = "block";
	//img2.style = eyes.style.cssText;


	img3.src = nose.src;
	img3.style.width = nose.style.width;
	img3.style.top = nose.style.top;

	//img3.style = nose.style.cssText;

	img4.src = mouth.src;
	img4.style.width = mouth.style.width;
	img4.style.top = mouth.style.top;
	//img4.style = mouth.style.cssText;



	ndiv.style.backgroundColor= prev.style.backgroundColor;
	ndiv.style.top = prev.style.top;

	ndiv.appendChild(img1);
	ndiv.appendChild(img2);
	ndiv.appendChild(img3);
	ndiv.appendChild(img4);

	disp.append(ndiv);

 }

 function randomFace(){
 	hair.src = "img/hair" + (Math.floor(Math.random() * 3) + 1 )
 +".png";
	mouth.src = "img/mouth" + (Math.floor(Math.random() * 3) + 1 )
 +".png";
	nose.src = "img/nose" + (Math.floor(Math.random() * 3) + 1  )
+".png";
	eyes.src = "img/eyes" + (Math.floor(Math.random() * 3) + 1  )
 +".png";

  	prev.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

  	var r1 = (Math.floor(Math.random() * 70) + 1 );
  	var r2 = (Math.floor(Math.random() * 40) + 1 );
  	var r3 = (Math.floor(Math.random() * 30) + 1 );
  	var r4 = (Math.floor(Math.random() * 35) + 1 );

  	range1.value = r1;
  	range2.value = r2;
  	range3.value = r3;
  	range4.value = r4;

  	hair.style.width = r1 + "%";
  	eyes.style.width = r2 + "%";
  	mouth.style.width = r4 + "%";
  	nose.style.width = r3+ "%";
 }



document.getElementById("numButt").addEventListener("click", function(){
	changeType("number");
})

document.getElementById("rangeButt").addEventListener("click", function(){
	changeType("range");

})

function changeType(type){
	document.getElementById("range1").type = type;
	document.getElementById("range2").type = type;
	document.getElementById("range3").type = type;
	document.getElementById("range4").type = type;
}


var startinterval = null; 
document.getElementById("autoButt").addEventListener("click", function(){

	 startinterval = window.setInterval(function(){
 		randomFace();
 		createface();

	}, 500);
});

document.getElementById("stopButt").addEventListener("click", function(){
	clearInterval(startinterval);

});