//var myHeading = document.querySelector('h2');//声明一个myHeading的变量用来接收 h2中的值
//myHeading.innerHTML='Hello World!';//进行替换


var myImage=document.querySelector('img');

myImage.onclick=function(){
    var mySrc=myImage.getAttribute('src');
    if(mySrc==='image/moto.jpg'){
        myImage.setAttribute('src','image/moto1.jpg');
    }else{
        myImage.setAttribute('src','image/moto.jpg');
    }
}


var myButton=document.querySelector('button');
var myHeading=document.querySelector('h2');

function setUserName(){
    var myName=prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML='Mozilla is cool'+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName=localStorage.getItem('name');
    myHeading.innerHTML='Mozilla is cool'+storedName;
}
myButton.onclick=function(){
    setUserName();
}

