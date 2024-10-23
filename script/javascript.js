// Open the lightbox with the clicked image
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = 'flex';  // Ensures the lightbox is shown
    setTimeout(() => {
        lightbox.classList.add('active');  // Adds the active class for transition
    }, 10);  // Small delay to trigger the transition
    lightboxImg.src = imageSrc;
}

// Close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');

    lightbox.classList.remove('active');  // Removes the active class to start the fade out
    setTimeout(() => {
        lightbox.style.display = 'none';  // Hides the lightbox after the transition
    }, 300);  // Matches the transition duration
}

// ---------------------- whatsapp ----------------------------------



document.querySelectorAll('.cv__button').forEach(button => {
    button.addEventListener('click', function() {
        // Obtener el título del currículum
        const title = this.parentElement.querySelector('.cv__title').innerText;

        // Número de WhatsApp
        const phoneNumber = '543815411429';

        // Mensaje de WhatsApp
        const message = `Hola! quiero hacer mi cv con el ${title} ¿Qué datos debo enviarte?`;

        // Redirigir a WhatsApp con el mensaje
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    });
});
