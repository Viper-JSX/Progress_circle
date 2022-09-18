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
}

toggleProgress.addEventListener("click", handleProgressToggle);
progressCircleTypeSwitch.addEventListener("change", handleProgressCircleTypeChange)