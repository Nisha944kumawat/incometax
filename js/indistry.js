const industriesSection = document.querySelector(".industries-section");

const industriesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            industriesSection.classList.add("active");
        }else{
            industriesSection.classList.remove("active");
        }
    });
},{
    threshold:0.50
});

if(industriesSection){
    industriesObserver.observe(industriesSection);
}