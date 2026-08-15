let button = document.querySelector("#btn");
let text1= document.querySelector("#text");
let color =["red","blue","yellow","pink"];

button.addEventListener("click",()=>{

   
 
       let randoIndex = Math.floor(Math.random()*color.length);
       let randomColor= color[randoIndex];

       text1.innerText= randomColor;
       document.body.style.backgroundColor=randomColor;
  
    
    
   

});