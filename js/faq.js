// FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => {

            faq.classList.remove("active");

            faq.querySelector("i").classList.remove("fa-chevron-up");
            faq.querySelector("i").classList.add("fa-chevron-down");

        });

        if (!isActive) {

            item.classList.add("active");

            item.querySelector("i").classList.remove("fa-chevron-down");
            item.querySelector("i").classList.add("fa-chevron-up");

        }

    });

});


// FAQ SCROLL ANIMATION

const revealElements = document.querySelectorAll(
    ".reveal-left, .reveal-bottom, .reveal-top"
);

const faqObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach((element) => {
    faqObserver.observe(element);
});