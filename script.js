let string = "";
let screen = document.querySelector(".screen")
let button = document.querySelectorAll(".button")
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=='='){
           
            string = eval(string)
        }
        else if(e.target.innerText == "AC"){
            string=""
        }
        else if(e.target.innerText =="+/-"){
            if(string[0]=='-'){
                string = string.slice(1,)
            }
            else{
                string= "-"+ string
            }
        }
      else{
        string += e.target.innerText
        console.log(string);
      }
     screen.innerText = string
    })
})