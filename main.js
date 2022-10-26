console.log("Bonjour depuis le navigateur" )
let toto= document.getElementById("paragraf")
let change = document.getElementById("textinput")
change.addEventListener("input", function (e){

   let articles = document.getElementsByTagName("article")
    
   for(const article of articles){
    article.style.backgroundColor = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
   }
   document.getElementsByTagName("h1")[0].innerText =e.target.value;

   console.log(e.target.value)

});



function retrieveGrades(gradeID){
   let grades =[]
   for (const gradesIDElement of gradeID){
      grades.push(parseFloat(document.getElementById(gradesIDElement).value))
   }
   return grades
}
let inputs = document.getElementsByTagName("input")
for (const input of inputs) {
   input.addEventListener("input", function () {
      console.log(
          displayAverage(average(retrieveGrades(["grade-1", "grade-2"])), "average"))

   })
}

function average (gradesArray){
   let sum= 0
   for ( const grades of gradesArray){
      sum += grades
   }
   return sum / gradesArray.length
}
function displayAverage(avg,id){
   document.getElementById(id).innerText =avg

}


