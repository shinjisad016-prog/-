// ============================
// Hiroshi Payment Script
// ============================

// Loading
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1200);

});


// ============================
// Copy Number
// ============================

function showToast(message){

    const toast = document.getElementById("toast");

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2500);

}


function copyBank(){

    const number =
    document.getElementById("bankNumber").innerText;

    navigator.clipboard.writeText(number);

    showToast("✔ คัดลอกเลขบัญชีแล้ว");

}


function copyWallet(){

    const number =
    document.getElementById("wallet").innerText;

    navigator.clipboard.writeText(number);

    showToast("✔ คัดลอกเบอร์ TrueMoney แล้ว");

}


// ============================
// Download QR
// ============================

function downloadQR(){

    const link = document.createElement("a");

    link.href = "assets/qr.png";

    link.download = "QR-Code.png";

    link.click();

}


// ============================
// Random Stars
// ============================

const starContainer =
document.getElementById("stars");

for(let i=0;i<180;i++){

    const star =
    document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=
    Math.random()*5+"s";

    star.style.opacity=Math.random();

    starContainer.appendChild(star);

}


// ============================
// Shooting Stars
// ============================

function shootingStar(){

    const star =
    document.createElement("div");

    star.className="shooting";

    star.style.left =
    Math.random()*100+"vw";

    star.style.top =
    Math.random()*40+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1800);

}

setInterval(shootingStar,3500);


// ============================
// Mouse Parallax
// ============================

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

const character=
document.querySelector(".character");

character.style.transform=
`translate(${x}px,${y}px)`;

});
