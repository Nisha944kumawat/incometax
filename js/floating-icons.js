document.addEventListener("DOMContentLoaded", () => {

    const floatingContainer = document.getElementById("floating-icons");

    if (floatingContainer) {

        floatingContainer.innerHTML = `
            <div class="floating-icons">

                <!-- LinkedIn -->
                <a href="https://www.linkedin.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon linkedin ring-effect"
                   title="LinkedIn">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <!-- Instagram -->
                <a href="https://www.instagram.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon instagram ring-effect"
                   title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <!-- Facebook -->
                <a href="https://www.facebook.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon facebook ring-effect"
                   title="Facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>

                <!-- WhatsApp -->
                <a href="https://api.whatsapp.com/send?phone=919167590448"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="floating-icon whatsapp ring-effect"
                   title="WhatsApp">
                    <i class="fa-brands fa-whatsapp"></i>
                </a>

                <!-- Call -->
                <a href="tel:+919167590448"
                   class="floating-icon call ring-effect"
                   title="Call Now">
                    <i class="fa-solid fa-phone"></i>
                </a>

            </div>
        `;
    }

});