let container=document.querySelector(".container");
let btn1=document.querySelector(".number_btn");
let input1=document.querySelector("#mobile_number");

let btn2=document.querySelector(".payment_btn");
let input2=document.querySelector("#password");
let amount=document.querySelector("#amount");
let result=document.querySelector(".result");
btn1.addEventListener("click",function(){
   
    if(input1.value==""){
        alert("Enter your mobile number");
    }
    else if(input1.value.length!=10){
        alert("Enter the mobile number correctly")

    }
    // else if(amount.value=""){
    //     alert("Enter the amount to be paid");
    //     e.preventDefault();
    // }
    
    else{
        input2.style.display="flex";
        btn2.style.display="flex";
        alert("Enter your password");
    }
})
result.style.display="none";
btn2.addEventListener("click",function(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(input2.value.length==6){
                resolve();
            }            
            else{
                if(input2.value==""){
                    reject("Enter your password");
                }
                else if(input2.value.length!=6){
                    reject("Enter your correct password");
                }
            }
        },2000);
        
    })


   promise.then(()=>{
        container.style.display="none";
        result.style.display="flex";
        
    })
    .catch((mssg)=>{
        alert(mssg)
       
    })

   
    
})

