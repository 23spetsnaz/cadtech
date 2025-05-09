      //Image Modal
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
 
    // Contact Form Submission
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('phone');
  const errorDisplay = document.getElementById('form-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const firstName = form.elements['firstName'].value.trim();
    const lastName = form.elements['lastName'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = phoneInput.value.trim();
    const message = form.elements['message'].value.trim();

    let errorMessages = [];

    // Reset previous error states
    errorDisplay.style.display = 'none';
    errorDisplay.textContent = '';
    phoneInput.style.border = '';

    // Basic validation for required fields
    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate phone number: only digits
    if (phone && !/^\d+$/.test(phone)) {
      errorMessages.push('Phone number must contain only digits.');
      phoneInput.style.border = '2px solid red';
    }

    // Validate phone number length: at least 9 digits
    if (phone && phone.length < 9) {
      errorMessages.push('Phone number must be at least 9 digits long.');
      phoneInput.style.border = '2px solid red';
    }

    if (errorMessages.length > 0) {
      // Display error messages
      errorDisplay.textContent = errorMessages.join(' ');
      errorDisplay.style.display = 'block';
    } else {
      // Construct the mailto link with form data
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(
        `First Name: ${firstName}\n` +
        `Last Name: ${lastName}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Message:\n${message}`
      );

      // Open the user's default email client with pre-filled fields
      window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

      // Reset the form fields
      form.reset();

      // Display a confirmation alert
      alert('Your message has been sent successfully! Jeessssas');
    }
  });

  // Real-time validation feedback for phone input
  phoneInput.addEventListener('input', function () {
    const phone = phoneInput.value.trim();

    // Remove error messages and red border when input is corrected
    if (/^\d+$/.test(phone) && phone.length >= 9) {
      errorDisplay.style.display = 'none';
      errorDisplay.textContent = '';
      phoneInput.style.border = '';
    }
  });
});

    
    

  
  











