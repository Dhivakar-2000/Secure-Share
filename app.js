// Import the necessary Firebase modules
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

// Initialize Firebase authentication
const auth = getAuth();

// Function to send OTP
document.getElementById('register-btn').addEventListener('click', function() {
  const phoneNumber = document.getElementById('phone-number').value;

  // Hide the registration form and show the OTP form
  document.getElementById('register-section').style.display = 'none';
  document.getElementById('otp-section').style.display = 'block';

  // Initialize the reCAPTCHA verifier
  const appVerifier = window.recaptchaVerifier;

  // Send OTP to the provided phone number
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // OTP sent successfully
      console.log("OTP sent");
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {
      // Handle errors
      console.log("Error sending OTP:", error);
    });
});

// Function to verify OTP
document.getElementById('verify-otp-btn').addEventListener('click', function() {
  const otp = document.getElementById('otp').value;

  // Verify OTP entered by the user
  window.confirmationResult.confirm(otp)
    .then((result) => {
      // OTP verified successfully
      console.log("OTP verified");

      // Hide the OTP form and show the login form
      document.getElementById('otp-section').style.display = 'none';
      document.getElementById('login-section').style.display = 'block';
    })
    .catch((error) => {
      // Handle errors
      console.log("Error verifying OTP:", error);
    });
});

// Function to handle login
document.getElementById('login-btn').addEventListener('click', function() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Handle login logic (this can be extended further with Firebase authentication)
  console.log(`Login credentials: ${email}, ${password}`);
  
  // After successful login, redirect to the dashboard page
  window.location.href = 'dashboard.html';
});
