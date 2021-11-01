
const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#usernameSign').value.trim();
  const email = document.querySelector('#emailSign').value.trim();
  const password = document.querySelector('#passwordSign').value.trim();

	console.log(name,email,password)

  if (name && email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ name:name, email:email, password:password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to sign up');
    }
  }
};

document
  .querySelector('.signup-account')
  .addEventListener('click', signupFormHandler);