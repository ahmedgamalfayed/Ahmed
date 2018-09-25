function hoverButton() {
    
    "use strict";
    
    document.getElementById("butt").style.backgroundColor = "#080";
}

function hoverOut() {
    
    "use strict";
    
    document.getElementById("butt").style.backgroundColor = " #00BC8A";
}

function show() {
    
    "use strict";
    
    document.getElementById("butt2").style.visibility = "visible";
}

function hide() {
    
    "use strict";
    
    document.getElementById("butt2").style.visibility = "hidden";
}

var n = 0;

function hoverNum() {
    
    "use strict";
    n = n + 1;
    
    document.getElementById("img1").innerHTML = n;
    
}

var m = 0;

function hoverNum2() {
    
    "use strict";
    m = m + 1;
    
    document.getElementById("img2").innerHTML = m;
    
}

var h = 0;

function hoverNum3() {
    
    "use strict";
    h = h + 1;
    
    document.getElementById("img3").innerHTML = h;
    
}

function font() {
    
    "use strict";
    
    document.getElementById("click").style.color = "#F50";
}


function hideFont() {
    
    "use strict";
    
    document.getElementById("click").style.color = "black";
}


function font2() {
    
    "use strict";
    
    document.getElementById("click2").style.color = "#F50";
}


function hideFont2() {
    
    "use strict";
    
    document.getElementById("click2").style.color = "black";
}



function font3() {
    
    "use strict";
    
    document.getElementById("click3").style.color = "#F50";
}


function hideFont3() {
    
    "use strict";
    
    document.getElementById("click3").style.color = "black";
}


function font4() {
    
    "use strict";
    
    document.getElementById("click4").style.color = "#F50";
}


function hideFont4() {
    
    "use strict";
    
    document.getElementById("click4").style.color = "black";
}



function font5() {
    
    "use strict";
    
    document.getElementById("click5").style.color = "#F50";
}


function hideFont5() {
    
    "use strict";
    
    document.getElementById("click5").style.color = "black";
}

function valid() {
    
    "use strict";
    
    var t = prompt(" How old are you ...");
    
    if (t <= 18 )
        
        {   
            alert("You Must be plus 18 ")
            
        }else {
           
            window.location = "project.html";
       }
   
    
    
}