(() => {
    const snowContainer = document.getElementById("snow-container");

    const snowPatterns = ["❄", "❅", "❆", "✦", "✧", "·"];
    for (let i = 0; i < 80; i ++){
        const snow = document.createElement("div");
        snow.className = "snow";
        snow.textContent = snowPatterns[Math.floor(Math.random() * snowPatterns.length)];

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = Math.random() * 20 + 8 + "px";
        const duration = Math.random() * 8 + 6;
        snow.style.animationDuration = duration + "s";
        snow.style.animationDelay = Math.random() * 20 + 8 + "px";
        snow.style.fontSize = -(Math.random() * duration) + "s";
        snow.style.setProperty("--sway", Math.random() * 200 - 100 + "px");
        snow.style.setProperty("--rotation", Math.random() * 1080 - 540 + "deg");
        snow.style.opacity =Math.random() * 0.7 + 0.3;

        snowContainer.appendChild(snow);
    }
})();

let Click_times = []

function AddCPS(){
    const now = performance.now();
    Click_times.push(now);
}

function update_CPS(){
    const CPS_label = document.getElementById("CPS_check_totalcps");
    now = performance.now();

    while (Click_times.length > 0 && now - Click_times[0] > 1000){
        Click_times.shift();
    }

    const  cps = (Click_times.length);
    CPS_label.textContent = `CPS: ${cps}`;
}

setInterval(update_CPS, 50);