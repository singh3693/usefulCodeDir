function loadReCaptcha() {
    // Check if the script is already loaded to avoid duplication
    if (document.getElementById('recaptcha-script')) {
        renderReCaptcha(); // Try to render if already loaded
        return;
    }

    // Create the script tag
    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;

    // Append the script to the document
    document.body.appendChild(script);
}

// Callback function that gets called when the reCAPTCHA script loads
window.onReCaptchaLoad = function () {
    renderReCaptcha();
};

// Function to render reCAPTCHA
function renderReCaptcha() {
    // Check if grecaptcha is defined and reCAPTCHA hasn't been rendered yet
    if (typeof grecaptcha !== 'undefined' && document.getElementById('site-recaptcha').childElementCount === 0) {
        grecaptcha.render('site-recaptcha', {
            sitekey: 'site-key-here' // Replace with your actual reCAPTCHA site key
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {

    // Other interactions can also be used, such as focusing on input fields or scrolling
    window.addEventListener('scroll', function () {
        loadReCaptcha();
    });
});