document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.style.maxHeight = navLinks.scrollHeight + "px";
        } else {
            navLinks.style.maxHeight = 0;
        }
    });

    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.querySelector('.product-images > img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Enlever la classe 'selected' de toutes les miniatures
            thumbnails.forEach(img => img.classList.remove('selected'));
            // Ajouter la classe 'selected' à la miniature cliquée
            this.classList.add('selected');
            // Changer l'image principale
            mainImage.src = this.src;
        });
    });
});
