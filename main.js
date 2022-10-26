console.log("Bonjour depuis le navigateur" )
let toto= document.getElementById("paragraf")

toto.addEventListener("click", function (){

   let articles = document.getElementsByTagName("article")

   for(const article of articles){
    article.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
   }
   
});
