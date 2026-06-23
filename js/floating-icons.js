document.addEventListener("DOMContentLoaded", () => {

    const floatingContainer = document.getElementById("floating-icons");

    if (floatingContainer) {

        floatingContainer.innerHTML = `
            <div class="floating-icons">

                 <!-- twiter -->
                <a href="https://x.com/tax_thetitans"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon twiter ring-effect"
                   title="https://x.com/tax_thetitans">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>
                
                <!-- LinkedIn -->
                <a href="https://www.linkedin.com/in/the-tax-titans/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon linkedin ring-effect"
                   title="https://www.linkedin.com/in/the-tax-titans/">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <!-- Instagram -->
                <a href="https://www.instagram.com/the_taxtitans/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon instagram ring-effect"
                   title="https://www.instagram.com/the_taxtitans/">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com/people/The-Tax-Titans/61568445872166/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon facebook ring-effect"
                   title="https://www.facebook.com/people/The-Tax-Titans/61568445872166/">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>

                <!-- WhatsApp -->
                <a href="https://api.whatsapp.com/send?phone=919167590448"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon whatsapp ring-effect"
                   title="9167590448">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>

                <!-- Call -->
                <a href="tel:+919167590448"
                   class="floating-icon call ring-effect"
                   title="9167590448">
                    <i class="fa-solid fa-phone"></i>
                </a>

            </div>
        `;
    }

});