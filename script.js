let nums = document.querySelectorAll(".nums");
let target= document.querySelector("#r_target")
let score_html = document.querySelector("#r_score")
let score=0;
let rand_target;
let random;
let timerr=29;
let timer=document.querySelector("#r_timer")
let playBtn=document.querySelector("#play");
let s_screen=document.querySelector(".startingScreen");
let endScreen=document.querySelector(".endingScreen");
let finalScore=document.querySelector("#finalScore");
let time;
document.querySelector("#playAgain").addEventListener(("click"),()=>{
    score=0;
    score_html.innerText=score;
    timerr=30;
    time=setInterval(timeupdate,1000);
    randomFunc(nums,target);
    endScreen.style.zIndex=-1;
})
document.querySelector("#skip").addEventListener("click",()=>{
    score-=5;
    randomFunc(nums,target);
    score_html.innerText=score;
    if(score<0){
    score_html.style.color="red";
    }
})

let timeupdate=()=>{
    timer.innerText=timerr+"s";
    timerr-=1;
    if(timerr<0)
    {
        clearInterval(time);
        endScreen.style.zIndex=3;
        finalScore.innerText="Your score : "+score;

    }

    
}

let  randomFunc =(nums,target)=>{ 
    nums.forEach((num)=>{
       random=Math.floor(Math.random()*10);
       num.innerText=random;
    })  
    rand_target=Math.floor(Math.random()*10);
    target.innerText=rand_target;
   }
 playBtn.addEventListener(("click"),()=>{
    randomFunc(nums,target);
    s_screen.style.left="-105vw";
    time=setInterval(timeupdate,1000);

   })

nums.forEach((number)=>{
    number.addEventListener(("click"),()=>{
        let rand_num=number.innerText;
          if(rand_target==rand_num)
           {
              score+=10;
              score_html.innerText=score;
              timerr+=1;
           }
           else{
            score-=10
            score_html.innerText=score;
           }
       randomFunc(nums,target);
       if(score<0)
       {
        score_html.style.color="red";
       }
       else{
        score_html.style.color="black";
       }

    })
})
