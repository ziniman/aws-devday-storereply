// Example POST method implementation:
const url = 'https://232ojnqspg.execute-api.eu-west-1.amazonaws.com/send?user=boaz&message=Hello';
var content = document.getElementById('content');
var errorContent = document.getElementById('error');

async function callLambda() {
    try {
        var start = performance.now();
        const data = await postData(url);
        console.log(JSON.stringify(data));
        var end = performance.now();
        console.log("Lambda Call took " + (end - start) + " milliseconds.");
        content.innerHTML += "<p>Lambda Call took " + (end - start) + " milliseconds.</p>";
    }catch (error) {
      errorContent.style.display = "block";
      errorContent.innerHTML += "<p>" + error + "</p>";
      console.error(error);
    }
  };

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

const interval = setInterval(function() {
   callLambda()
 }, 1000);
