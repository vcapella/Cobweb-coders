const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#usernameLog').value.trim();
  const password = document.querySelector('#passwordLog').value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ name:username, password:password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/homepage');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-account')
  .addEventListener('click', loginFormHandler);


