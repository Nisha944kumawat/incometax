// ABOUT SECTION JS

document.addEventListener("DOMContentLoaded", () => {

    const aboutSection = document.querySelector(".about-section");

    let hasAnimated = false;

    function runAnimation() {

        // LEFT IMAGES
        document.querySelectorAll(".slide-left").forEach((item, index) => {

            setTimeout(() => {
                item.classList.add("show");
            }, index * 250);

        });

        // TITLE
        document.querySelectorAll(".fade-up").forEach((item, index) => {

            setTimeout(() => {
                item.classList.add("show");
            }, index * 300);

        });

        // PROGRESS BAR
        let progress = 0;

        const progressFill =
            document.getElementById("progressFill");

        const progressPercent =
            document.getElementById("progressPercent");

        const progressInterval = setInterval(() => {

            if (progress >= 95) {

                clearInterval(progressInterval);

            } else {

                progress++;

                progressPercent.innerText =
                    progress + "%";

                progressFill.style.width =
                    progress + "%";

            }

        }, 25);

        // EXPERIENCE COUNTER

        let count = 0;

        const experienceCounter =
            document.getElementById("experienceCounter");

        const experienceInterval = setInterval(() => {

            if (count >= 5) {

                clearInterval(experienceInterval);

            } else {

                count++;

                experienceCounter.innerText = count;

            }

        }, 350);

    }

    function resetAnimation() {

        document.querySelectorAll(".slide-left").forEach(item => {
            item.classList.remove("show");
        });

        document.querySelectorAll(".fade-up").forEach(item => {
            item.classList.remove("show");
        });

        document.getElementById("progressFill").style.width = "0%";
        document.getElementById("progressPercent").innerText = "95%";
        document.getElementById("experienceCounter").innerText = "5";

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !hasAnimated) {

                hasAnimated = true;

                runAnimation();

            }

            else if (!entry.isIntersecting) {

                hasAnimated = false;

                resetAnimation();

            }

        });

    }, {
        threshold: 0.35
    });

    observer.observe(aboutSection);

});