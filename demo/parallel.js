// Example POST method implementation:
const url = 'https://232ojnqspg.execute-api.eu-west-1.amazonaws.com/send?user=boaz&message=Hello';

(async function() {
    try {
        var start = performance.now();
        const data = await postData(url);
        console.log(JSON.stringify(data));
        var end = performance.now();
        console.log("Lambda Call took " + (end - start) + " milliseconds.");
    }catch (error) {
      console.error(error);
    }
  })();

async function postData(url) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow'
  });
  await console.log(response);
  return await response.json(); // parses JSON response into native JavaScript objects
}
