const joinForm = document.getElementById('joinForm');

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const joinCode = document.getElementById('joinCode').value;

  const famData = {
    key: joinCode,
  };
  const url = '/join';
  const options = {
    method: 'POST',
    body: JSON.stringify(famData),
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
