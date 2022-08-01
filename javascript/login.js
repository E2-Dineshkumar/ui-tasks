// function validateUser(){
//     var userId =document.getElementById('userIdTextBox').value;            
//         if (userId.length==0){
//             document.getElementById('userIdErr').innerHTML="Please Enter valid userId";
//         }
//     console.log(userId);
// }
// function validatePass(){
//     var password =document.getElementById('passwordTextBox').value;
//         if(password.length==0){
//             document.getElementById('passErr').innerHTML="Please Enter correct password";
//        }
//     console.log(password);
// }

function validateUserField(){
    var userId =document.getElementById('userIdTextBox').value;
    //var password=document.getElementById('passwordTextBox').value;
    if (userId.length==0){
        document.getElementById('userIdErr').innerHTML="**Please Enter User ID";
    }
    else{
        document.getElementById('userIdErr').innerHTML=''
    }
    console.log('userId: ',userId);
}

function validatePassField(){
    //var userId =document.getElementById('userIdTextBox').value;
    var password=document.getElementById('passwordTextBox').value;
    if(password.length==0){
        document.getElementById('passErr').innerHTML="**Please Enter Password";
    }
    else{
        document.getElementById('passErr').innerHTML="";
    }
    console.log('password: ',password);
}