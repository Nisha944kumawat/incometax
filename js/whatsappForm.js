document.getElementById("whatsappForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let message = document.getElementById("message").value;

    let whatsappMessage =
`*Request a Free Consultation*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Location:* ${location}
*Message:*
${message}`;

    let whatsappURL =
    `https://wa.me/919167590448?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});