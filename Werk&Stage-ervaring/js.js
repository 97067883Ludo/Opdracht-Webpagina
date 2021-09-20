let show = 0;
function myFunction(){
    if(show ==0){
    document.getElementById("test").style.display = "block";
        show = 1;
    }
    else{
        document.getElementById("test").style.display = "none";
        show = 0;
    }
}