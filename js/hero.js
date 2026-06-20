window.addEventListener("load",()=>{

    const title=document.querySelector(".hero-title");

    setInterval(()=>{

        title.animate([
            {
                transform:"translateY(0px)"
            },
            {
                transform:"translateY(-8px)"
            },
            {
                transform:"translateY(0px)"
            }
        ],{
            duration:4000,
            iterations:1
        });

    },4000);

});