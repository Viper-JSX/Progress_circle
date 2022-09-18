const progressFillStrip = document.getElementById("progressFillStrip");
const toggleProgress = document.getElementById("toggleProgress");
const progressCircleTypeSwitch = document.getElementById("progressCircleTypeSwitch");

let inProgress = false;
let progressCircleType = "single-side";

function handleProgressToggle(){
    inProgress = !inProgress;

    if(inProgress){
        progressFillStrip.style.animationName = "spinning";
    }
    else{
        progressFillStrip.style.animationName = "none";
    }
}

function handleProgressCircleTypeChange(event){
    progressCircleType = event.target.value;

    switch(progressCircleType){
        case "single-side":{
            progressFillStrip.style.cssText = "height: 50%; transform-origin: 50% bottom";   
            break;
        }
        case "double-side":{
            progressFillStrip.style.cssText = "height: 100%; transform-origin: 50% 50%";   
            break;
        }
        default:{
            progressFillStrip.style.cssText = "height: 50%; transform-origin: 50% bottom";   
            break
        }
    }
}

toggleProgress.addEventListener("click", handleProgressToggle);
progressCircleTypeSwitch.addEventListener("change", handleProgressCircleTypeChange)