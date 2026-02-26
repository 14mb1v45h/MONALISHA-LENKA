// Scroll progress
window.addEventListener("scroll",()=>{
  let scrollTop=document.documentElement.scrollTop;
  let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progress-bar").style.width=(scrollTop/scrollHeight)*100+"%";
});

// Typing effect
const roles=["Operations Specialist","HR Strategist","Logistics Optimizer"];
let roleIndex=0,charIndex=0,isDeleting=false;

function type(){
  const current=roles[roleIndex];
  const element=document.getElementById("typing");

  if(isDeleting){
    element.textContent=current.substring(0,charIndex--);
  }else{
    element.textContent=current.substring(0,charIndex++);
  }

  if(!isDeleting && charIndex===current.length){
    setTimeout(()=>isDeleting=true,1000);
  }else if(isDeleting && charIndex===0){
    isDeleting=false;
    roleIndex=(roleIndex+1)%roles.length;
  }

  setTimeout(type,isDeleting?60:100);
}
document.addEventListener("DOMContentLoaded",type);

// EmailJS
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>alert("Message Sent Successfully!"))
  .catch(()=>alert("Error sending message"));
});
