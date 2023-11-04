/* Question 3: 

Name Cases: Store a person’s name in a variable 
and then print that person’s name in lowercase, uppercase, and titlecase. */

let personNameIs = "Humair gul"

let personNameInUc = personNameIs.toUpperCase();
console.log(personNameInUc);

let personNameInLc = personNameIs.toLowerCase();
console.log(personNameInLc);

let Start:Boolean=true;
while(Start){
    if (personNameIs.split(' ').length>1){

       let InTitleCaseArr:String[]=personNameIs.split(' ').map((Name)=>{
        return Name.replace(Name[0],Name[0].toUpperCase())
       }) 

       let InTitleCase:String=InTitleCaseArr.join(' ')
       console.log(`The Person Name in Title case: ${InTitleCase}`)
       Start=false
    }
    if (personNameIs.split(' ').length===1){
        let InTitleCase:String=personNameIs.replace(personNameIs[0],personNameIs[0].toUpperCase())
        console.log(`The Person name in Title case: ${InTitleCase}`)
        Start=false
    }
}