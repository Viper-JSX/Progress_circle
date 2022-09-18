const progressFillStrip = document.getElementById("progressFillStrip");
const toggleProgress = document.getElementById("toggleProgress");
const progressCircleTypeSwitch = document.getElementById("progressCircleTypeSwitch");

let rotationSpeed = 5; //(0; 30];
let inProgress = false;
let progressCircleType = "single-side";

progressFillStrip.style.animationDuration = `${5 / rotationSpeed}s`;
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
            progressFillStrip.style.height = "50%";
            progressFillStrip.style.borderTopWidth = "var(--stripThikness)";
            progressFillStrip.style.borderBottomWidth = "0px";
            progressFillStrip.style.transformOrigin = "center bottom";
            break;
        }
        case "double-side":{
            progressFillStrip.style.height = "100%";
            progressFillStrip.style.borderTopWidth = "var(--stripThikness)";
            progressFillStrip.style.borderBottomWidth = "var(--stripThikness)";
            progressFillStrip.style.transformOrigin = "center center";
            break;
        }
        default:{
            progressFillStrip.style.height = "50%";
            progressFillStrip.style.transformOrigin = "center bottom";            break
        }
    }
}