var isclicked=1;

function changeColor(){
    if(isclicked==1){
        document.getElementById("hello").style="color: blue";
    }else{
        document.getElementById("hello").style="color: red";
    }
    isclicked = isclicked * -1;
    return true;
}

