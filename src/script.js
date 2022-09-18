const progressFillStrip = document.getElementById("progressFillStrip");
const toggleProgress = document.getElementById("toggleProgress");
const progressCircleTypeSwitch = document.getElementById("progressCircleTypeSwitch");

let inProgress = false;
let progressCircleType = "single-side";

progressCircleTypeSwitch.value = "single-side";

toggleProgress.addEventListener("click", handleProgressToggle);
progressCircleTypeSwitch.addEventListener("change", handleProgressCircleTypeChange)

function handleProgressToggle(){
    inProgress = !inProgress;

    if(inProgress){
        progressFillStrip.style.animationPlayState = "running";
        this.textContent = "Stop";
    }
    else{
        progressFillStrip.style.animationPlayState = "paused";
        this.textContent = "Start";
    }
}

function handleProgressCircleTypeChange(event){
    progressCircleType = event.target.value;

    switch(progressCircleType){
        case "single-side":{
            progressFillStrip.style.cssText = "height: 50%; transform-origin: 50% bottom;";   
            break;
        }
        case "double-side":{
            progressFillStrip.style.cssText = "height: 100%; transform-origin: 50% 50%;";   
            break;
        }
        default:{
            progressFillStrip.style.cssText = "height: 50%; transform-origin: 50% bottom;";   
            break
        }
    }
}