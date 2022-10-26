

let x =5
const t= "tutu"

let o = {
tltl: 6,
tutu: 38,

}



let notes_bil=[4,5,6];
let notes_leo=[4,5,6];


function average(tableau){
 let total = 0

 for (const note in tableau){
 total+=note

return total / tableau.length
} }


let avg_bil = average(notes_bil)
let avg_leo = average(notes_leo)

function pass (avg) {
    if (avg <4){
        console.log("raté")
    }else {
        console.log("reussi")
    }
}

pass(avg_bil)
pass(avg_leo)
