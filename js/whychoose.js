// =====================================
// REVEAL ANIMATION REPEATABLE
// =====================================

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal-active");

        } else {

            entry.target.classList.remove("reveal-active");

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(".reveal-left,.reveal-right,.reveal-up")
.forEach(el=>{
    revealObserver.observe(el);
});


// =====================================
// COUNTER REPEATABLE
// =====================================

function startCounter(counter){

    const target =
    parseInt(counter.dataset.target);

    let count = 0;

    counter.innerText = "0";

    const speed = target / 80;

    function update(){

        count += speed;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            counter.innerText = target;
        }
    }

    update();
}

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(entry.target);

        }

    });

},{
    threshold:.5
});

document
.querySelectorAll(".counter")
.forEach(counter=>{

    counterObserver.observe(counter);

});


// =====================================
// PROGRESS BAR REPEATABLE
// =====================================

const skillObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        const progress =
        entry.target.querySelector(".progress");

        if(entry.isIntersecting){

            progress.style.width =
            progress.dataset.width + "%";

        }else{

            progress.style.width = "0%";

        }

    });

},{
    threshold:.3
});

document
.querySelectorAll(".skill")
.forEach(skill=>{

    skillObserver.observe(skill);

});


// =====================================
// FLOATING CARD EFFECT
// =====================================

document
.querySelectorAll(".stat-card")
.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-0.5)*15;

        const rotateX =
        ((y / rect.height)-0.5)*-15;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});