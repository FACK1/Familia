const form = document.getElementById('registerForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('came here');
  const registerUsername = document.getElementById('registerUsername').value;
  const registerName = document.getElementById('registerName').value;
  const registerPassword = document.getElementById('registerPassword').value;

  const userData = {
    username: registerUsername,
    name: registerName,
    password: registerPassword,
  };

  const url = '/register';
  const options = {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'content-type': 'application/json',
    },
  };

  fetch(url, options)
    .then((res) => {
      if (res.redirected) {
        window.location.href = res.url;
      } else {
        throw Error;
      }
    })
    .catch((err) => {
      alert('there was an error, try again');
    });
});
