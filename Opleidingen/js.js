let showCarmel = 0;
let showDeltion1 = 0;
let showDeltion2 = 0;

function carmel(){
    if(showCarmel == 0){
        document.getElementById("carmel").style.display = "block";
        showCarmel = 1;
    }
    else{
        document.getElementById("carmel").style.display = "none";
        showCarmel = 0;

    }
}
function deltion1(){
    if(showDeltion1 == 0){
        document.getElementById("deltion1").style.display = "block";
        showDeltion1 = 1;
    }
    else{
        document.getElementById("deltion1").style.display = "none";
        showDeltion1 = 0;
    }

}
function deltion2(){
    if(showDeltion2 ==0){
        document.getElementById("deltion2").style.display = "block";
        showDeltion2 = 1;
    }
    else{
        document.getElementById("deltion2").style.display = "none";
        showDeltion2 = 0;
    }

}