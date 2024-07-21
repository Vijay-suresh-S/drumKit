let clickedbtn;

for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function (){
    let clicked=this.innerHTML
    console.log(clicked);
    sound(clicked);
    buttonAnimation(clicked);
}
);
};

document.addEventListener("keydown",(event)=>{
    console.log(event.key);
    sound(event.key);
    buttonAnimation(event.key);
  }
);

function sound(clicked){
    switch (clicked)
    {
      case 'w': clickedbtn="crash.mp3";
      break;
      case 'a': clickedbtn="kick-bass.mp3";
      break;
      case 's': clickedbtn="snare.mp3";
      break;
      case 'd': clickedbtn="tom-1.mp3";
      break;
      case 'j': clickedbtn="tom-2.mp3";
      break;
      case 'k': clickedbtn="tom-3.mp3";
      break;
      case 'l': clickedbtn="tom-4.mp3";
      break;
      break;
      default: clickedbtn=null;
    }
    console.log(clickedbtn);
    if(clickedbtn)
        {
        var sound=new Audio("./sounds/"+clickedbtn);
        sound.play();
        }
    };

    function buttonAnimation(btn){
        let activebtn=document.querySelector("."+btn);
        activebtn.classList.add("pressed");
       setTimeout(()=>{ activebtn.classList.remove("pressed")},200);
    }