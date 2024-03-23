const handleCheck = async () => {
  let input = document.getElementsByTagName("input")[0];
  const pwd = input.value;
  // Replace 'url' with the actual URL you want to fetch
  const response = await fetch("http://127.0.0.1:5777/password", {
    method: "POST", // or 'GET'
    body: JSON.stringify({ password: pwd }), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  });
  const content = await response.json();
  resultP = document.getElementById("result");
  resultP.innerText = content.predicted;
  console.log(content.predicted);
};
