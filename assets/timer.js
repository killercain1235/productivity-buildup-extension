window.onload=function(){

	
    document.getElementById('btn1').addEventListener('click',setTimer);
    document.getElementById('btn2').addEventListener('click',ClearTimer);

    var bgpage = chrome.extension.getBackgroundPage();
    var analogClock;

    var canvas=document.getElementById('Canvas');
    var ctx= canvas.getContext('2d');
    var radius=canvas.height/2;
    ctx.translate(radius,radius);
    radius=0.9*radius;
    bgpage.clock(ctx,radius,100);
  //  console.log(bgpage.count);
//  if(bgpage.count==0){
   
        function setTimer(){
            var a=document.getElementById('tp1').value;
            bgpage.smt(a,ctx,radius);   
        }

   // }
    /* if(bgpage.count!=NaN){
        console.log("entered active");
        var t1;
        analogClock=setInterval(() => {
          t1=bgpage.count;
        bgpage.clock(ctx,radius,t1); 
        if(t1==undefined)
        clearInterval(analogClock);
        }, 1000);
       
    }*/
    function ClearTimer(){
    //clearInterval(analogClock);
    bgpage.cmt(ctx,radius);    
    }
  }
    

