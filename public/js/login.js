const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const userData = {
    username: loginUsername,
    password: loginPassword,
  };

  const url = '/login';
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
