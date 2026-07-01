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
// ============================
// Scroll Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".glass").forEach((card) => {
    observer.observe(card);
});


// ============================
// Ripple Effect
// ============================

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 700);

    });

});


// ============================
// Floating Crystals
// ============================

const particle = document.getElementById("particles");

for(let i=0;i<30;i++){

    const crystal = document.createElement("div");

    crystal.className = "crystal";

    crystal.style.left = Math.random()*100+"vw";

    crystal.style.animationDuration =
    (8+Math.random()*8)+"s";

    crystal.style.animationDelay =
    Math.random()*8+"s";

    crystal.style.opacity =
    0.2 + Math.random()*0.6;

    particle.appendChild(crystal);

}


// ============================
// Background Glow
// ============================

document.addEventListener("mousemove",(e)=>{

    document.body.style.backgroundPosition =
        `${e.clientX/25}px ${e.clientY/25}px`;

});


// ============================
// Card Hover Tilt
// ============================

document.querySelectorAll(".glass").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;
const rotateX=(rect.height/2-y)/18;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


// ============================
// Footer Year
// ============================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML +=
"<br>© "+new Date().getFullYear()+" Hiroshi Payment";

}
// ============================
// Cursor Glow
// ============================

const cursor = document.createElement("div");
cursor.id = "cursorGlow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ============================
// Button Spark
// ============================

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",(e)=>{

        for(let i=0;i<10;i++){

            const spark=document.createElement("span");

            spark.className="spark";

            spark.style.left=e.offsetX+"px";
            spark.style.top=e.offsetY+"px";

            spark.style.setProperty(
                "--x",
                (Math.random()*120-60)+"px"
            );

            spark.style.setProperty(
                "--y",
                (Math.random()*120-60)+"px"
            );

            button.appendChild(spark);

            setTimeout(()=>{
                spark.remove();
            },800);

        }

    });

});

// ============================
// Keyboard Shortcut
// Ctrl + C = Copy Bank
// ============================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="b"){

        copyBank();

    }

});

// ============================
// Card Entrance
// ============================

window.addEventListener("load",()=>{

    document.querySelector(".main-card")
        .animate([

            {
                opacity:0,
                transform:"translateY(50px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:1000,
            easing:"ease"

        });

});

// ============================
// QR Hover Glow
// ============================

const qr=document.querySelector(".qr");

if(qr){

qr.addEventListener("mouseenter",()=>{

    qr.style.transform="scale(1.05)";
    qr.style.boxShadow="0 0 40px cyan";

});

qr.addEventListener("mouseleave",()=>{

    qr.style.transform="";
    qr.style.boxShadow="";

});

}

// ============================
// Footer Year
// ============================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

// ============================
// Console Message
// ============================

console.log("%cHiroshi Payment",
"color:#00cfff;font-size:28px;font-weight:bold;");

console.log("%cDeveloped with HTML CSS JavaScript",
"color:white;font-size:14px;");
