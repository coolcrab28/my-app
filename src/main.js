function myFunction(){
   if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
     var w = window.innerWidth;
     var h = window.innerHeight;
   } else {  
     var w = document.documentElement.clientWidth;
     var h = document.documentElement.clientHeight;
   }
   var txt = "Page size: width=" + w + ", height=" + h;
   h -= 60;
   document.getElementById("main").style.width = w+'px';
   document.getElementById("main").style.height = h+'px';
   
 }
 