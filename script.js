function validatePassword() {
    var password = document.getElementById("password").value;
    // Define predefined passwords and corresponding URLs
    var passwords = {
      "orpa": "https://orpa-github-io.vercel.app/",
      "amici": "https://amiciforever.netlify.app/",
      "rifat":"https://rifatuzzaman.netlify.app/",
      "happy birthday":"https://happy-birthday-rifat-7lkl.vercel.app/#amici",
      // Add more passwords and URLs as needed
    };

    // Check if entered password matches predefined passwords
    if (password in passwords) {
      // Redirect to the corresponding website
      window.location.href = passwords[password];
      return false; // Prevent form submission
    } else {
      alert("Incorrect password. Please try again.");
      return false;
    }
  }