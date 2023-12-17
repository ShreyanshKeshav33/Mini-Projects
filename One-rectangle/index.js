var rect=document.querySelector("#center");

rect.addEventListener("mousemove",function(details){ //step1    //details is the name of the variable
    var rectLocation=rect.getBoundingClientRect(); //this function gives location i.e coordinates
    var insiderectVal=details.clientX-rectLocation.left; //clientX will tell X's location minus starting location of rectangel i.e rectangleLocation.left

  if(insiderectVal<rectLocation.width/2){
      var redcolor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,insiderectVal);
      //what gsap does here is that first 2 are inputs that gets exchanged with next 2 values and last one is where the mouse is
      gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
      })
  }else{
    var bluecolor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insiderectVal);
    gsap.to(rect,{
        backgroundColor:`rgb($0,0,${bluecolor})`,
      })  
}rect.addEventListener("mouseleave",function(){
   gsap.to(rect,{
    backgroundColor: "white"
   })
})
});