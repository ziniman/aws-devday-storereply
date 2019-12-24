// Example POST method implementation:
const url = 'https://232ojnqspg.execute-api.eu-west-1.amazonaws.com/send?user=boaz&message=Hello'

try {
  (async function() {
    const data = await postData(url);
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  })();
} catch (error) {
  console.error(error);
}

async function postData(url) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
  });
  await console.log(response);
  return await response.text(); // parses JSON response into native JavaScript objects
}
