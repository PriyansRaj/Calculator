let string = "";
let screen = document.querySelector(".screen")
let button = document.querySelectorAll(".button")
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerText=='='){
           
            string = operate()
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

function operate(){
    const operators = ['+','-','*','/','%']
    let a="",b="",op="";
    let i=0;
    for(i =0;i<string.length;i++){
        console.log(string[i]);
        if(operators.includes(string[i]) && a.length>0) {
            break;
        }
    else{
        a+= string[i]
    }
    }
    op = string[i]
    a= Number(a)
    b = Number(string.slice(i+1,))
    string =""
    console.log(`a = ${a} op=${op} b =${b}`)
    switch(op){
        case '+':{
            string = a+b;
            break;
        }
        case '-':{
            string = a-b
            break;
        }
        case '/':{
            string = Math.round(a/b)
            break;
        }
        case '*':{
            string = a*b
            break;
        }
        case '%':{
            string = a%b
            break;
        }
    }
    return string
}