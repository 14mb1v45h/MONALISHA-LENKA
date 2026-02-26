// Scroll Progress
window.onscroll=function(){
  let winScroll=document.body.scrollTop||document.documentElement.scrollTop;
  let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById("progress").style.width=(winScroll/height)*100+"%";
};

// Typing Animation
const texts=["Operations Specialist","HR Strategist","Logistics Optimizer"];
let count=0, index=0, currentText="", letter="";

(function type(){
  if(count===texts.length){count=0;}
  currentText=texts[count];
  letter=currentText.slice(0,++index);
  document.getElementById("typing").textContent=letter;
  if(letter.length===currentText.length){
    count++; index=0;
    setTimeout(type,1500);
  } else {
    setTimeout(type,100);
  }
})();

// EmailJS
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();
  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(()=>alert("Message Sent Successfully!"));
});

// CV Download Tracking
document.getElementById("downloadBtn").addEventListener("click",()=>{
  console.log("CV Downloaded");
});