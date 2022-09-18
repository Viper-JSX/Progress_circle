const progressFillStrip = document.getElementById("progressFillStrip");
const toggleProgress = document.getElementById("toggleProgress");

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

function handleProgressCircleTypeChange(){
    
}

toggleProgress.addEventListener("click", handleProgressToggle, { useCapture: false });