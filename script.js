

function checkAge(){
    
    let userInputName = document.getElementById("name");
    let userInputAge = document.getElementById("age");
    const name = userInputName.value;
    const age = userInputAge.value;
    let bgColor = document.getElementById("permission");
    document.getElementById("permission").innerHTML = age;
                if(name !== ""){
                    if (age<=20 && age > 0 ){
                        document.getElementById("permission").innerHTML = `Dear ${name} sorry you are not Eligabile to entranece because of Your Age! `;
                       bgColor.style.backgroundColor = "red";
                       bgColor.style.borderRadius= "10px"
                    }
                    else if(age>=21 && age > 0){
                        document.getElementById("permission").innerHTML = `Dear ${name} Welcome to our Cocktail Bar Adama you can join us stay safe! `;
                        bgColor.style.backgroundColor = "green";
                       bgColor.style.borderRadius= "10px"
                    }
                    else{
                        document.getElementById("permission").innerHTML = `Please enter age! `;
                        bgColor.style.backgroundColor = "red";
                       bgColor.style.borderRadius= "10px"
                    }
                }
                else if(name === "") {
                    document.getElementById("permission").innerHTML = `Please enter Name `;
                    bgColor.style.backgroundColor = "red";
                       bgColor.style.borderRadius= "10px"
                }
                
               
               
           
            
        
       
        
    
   
    

}
