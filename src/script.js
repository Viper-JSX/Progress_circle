const progressFillStrip = document.getElementById("progressFillStrip");

let inProgress = false;


function handleProgressToggle(){
    inProgress = !inProgress;

    if(inProgress){
        progressFillStrip.style.animationName = "spinning";
    }
    else{
        progressFillStrip.style.animationName = "none";
    }
}

