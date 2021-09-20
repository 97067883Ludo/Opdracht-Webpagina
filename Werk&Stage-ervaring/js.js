
let showStatusVeldmanTechniek = 0;
let showQueensystems = 0;
let showbepacom = 0;
let showEPNijverdal = 0;
let showGamma = 0;
let showKieftenbeld = 0;

function VeldmanTechniek(){
    if(showStatusVeldmanTechniek == 0){
    document.getElementById("VeldmanTechniek").style.display = "block";
    showStatusVeldmanTechniek = 1;
    }
    else{
        document.getElementById("VeldmanTechniek").style.display = "none";
        showStatusVeldmanTechniek = 0;
    }
}
function Queensystems(){
    if (showQueensystems == 0) {
        document.getElementById("Queensystems").style.display = "block";
        showQueensystems = 1;
    } else {
        document.getElementById("Queensystems").style.display = "none";
        showQueensystems = 0;
    }
}
function Bepacom(){
    if (showbepacom == 0) {
        document.getElementById("bepacom").style.display = "block";
        showbepacom = 1;
    } else {
        document.getElementById("bepacom").style.display = "none";
        showbepacom = 0;
    }
}
function EPNijverdal(){
    if (showEPNijverdal == 0) {
        document.getElementById("EPNijverdal").style.display = "block";
        showEPNijverdal = 1;
    } else {
        document.getElementById("EPNijverdal").style.display = "none";
        showEPNijverdal = 0;
    }
}
function Gamma(){
    if (showGamma == 0) {
        document.getElementById("Gamma").style.display = "block";
        showGamma = 1;
    } else {
        document.getElementById("Gamma").style.display = "none";
        showGamma = 0;
    }
}
function Kieftenbeld(){
    if (showKieftenbeld == 0) {
        document.getElementById("Kieftenbeld").style.display = "block";
        showKieftenbeld = 1;
    } else {
        document.getElementById("Kieftenbeld").style.display = "none";
        showKieftenbeld = 0;
    }
}