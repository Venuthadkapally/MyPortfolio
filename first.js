const right=document.querySelector(".right");
const left=document.querySelector(".left");
const slider=document.querySelector(".slider");
const images=document.querySelector(".images");
const boxes=document.querySelectorAll(".boxes");
const showResume=document.querySelector(".tap");
const resume=document.querySelector(".res-box");
let count=1;
/*////////////////////////////certifications.....................////////////////////////////*/
const nextslide=()=>{
  images.style.transform=`translateX(-${count*700}px)`;
  count++;
};
const firstslide=()=>{
  images.style.transform="translateX(0px)";
  count=1;
};
const lastslide=()=>{
  images.style.transform=`translateX(-${((boxes.length)-1)*700}px)`;
  count=boxes.length;
};
const prevslide=()=>{
  images.style.transform=`translateX(-${(count-2)*700}px)`;
  count--;
};
right.addEventListener("click",()=>{
  if(count<boxes.length)
  {
   nextslide();
  }
  else{
   firstslide();
  }
});
left.addEventListener("click",()=>{
  if(count>1)
    {
     prevslide();
    }
    else{
     lastslide();
    }  
});
/*////////////////////////////resume.....................////////////////////////////*/
let c=1
showResume.addEventListener("click",()=>{
    c++;
    if(c%2==0)
    {
      resume.style.display="block";
    }
    else{
      resume.style.display="none";
    }
});

/*///////////////////////////////navbar highlight////////////////////*/


const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll(".nav-links");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach((section)=>{
    const top=section.offsetTop-40;
    const height=section.offsetHeight;

    if(pageYOffset>=top-40 && pageYOffset<top+height)
    {
      current=section.getAttribute("id");
    }
  });
  navlinks.forEach((link)=>{
    link.classList.remove("active");
    const href=link.getAttribute("href").substring(1);
    if(href===current)
    {
      link.classList.add("active");
    }
  });
});



