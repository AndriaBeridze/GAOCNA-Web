document.addEventListener('DOMContentLoaded', () => {
    const socLinkToggler = document.querySelector('#soc-link-toggler');
    const socialMediaIconsDiv = document.querySelector('#social-media-icons')

    socLinkToggler.onclick = () => {
        socialMediaIconsDiv.classList.toggle('show');
    }; 
});
