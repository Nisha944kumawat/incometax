// =========================
// SERVICE SECTION ANIMATION
// =========================

const serviceObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.25
});

document.querySelectorAll(".service-card").forEach((card) => {
    serviceObserver.observe(card);
});


// =========================
// SECTION TITLE ANIMATION
// =========================

const titleObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.5
});

const sectionTitle = document.querySelector(".section-title");

if (sectionTitle) {
    titleObserver.observe(sectionTitle);
}