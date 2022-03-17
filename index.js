function validate(){
    var username = document.getElementById('uname').value;
    var Regx = /E00/i; //here i is used for case insensitive
    
    if(Regx.test(username)){
        alert("Valid Username")
    }else{
   
        alert("inValid Username")
    }
}