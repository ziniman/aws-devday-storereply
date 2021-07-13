// PARALLEL REQUESTS
var url = 'https://232ojnqspg.execute-api.eu-west-1.amazonaws.com/send?user=boaz&message=Hello'

try {
  (async function() {
    const data = await postData(url);
    console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
  })();
} catch (error) {
  console.error(error);
}

async function postData(url) {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors'
    });
    await console.log(response);
    data = await response.json(); // parses JSON response into native JavaScript objects
    await console.log(data);
    return data
}
