



// // const cityName = 'Birmingham';
// const apiKey = '31a0b4ebf7821bd9a366e97b956524f1';
// const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Coventry&APPID=31a0b4ebf7821bd9a366e97b956524f1'
// // const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiUrl}';


// console.log(apiUrl);

// fetch(apiUrl).then((response) => {
//     return response.json();
//     }).then((data) => {
//         console.log(data);
//     })

const cityName = "Manchester";
const countrycode = "UK";
const lattitude = 35;
const longitude = 139;
const apiKey = "fb8ccf6479bfb6396d3471c968b19e68";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=&appid=0619f7f59a3c152478cfd3bc97009e45`;
const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countrycode}&appid=31a0b4ebf7821bd9a366e97b956524f1`;
const apiUrl3 = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=31a0b4ebf7821bd9a366e97b956524f1`;

console.log(apiUrl3);

fetch(apiUrl3).then((response) => {
  const jsonData = response.json();

  jsonData.then((json) => {
    console.log(json.main.temp);
    document.querySelector("h3").textContent = `The city of ${json.name}`;
    document.querySelector(
      "h4"
    ).textContent = `The temperature today is ${json.main.temp}`;
  });

}).catch((error) => {
  console.log(`An error occured: ${error}`)
});
