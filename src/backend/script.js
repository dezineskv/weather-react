// const cityInput = document.getElementById("cityInput");
// const initialEl = document.getElementById("initial");
// const resultEl = document.getElementById("result");
// const searchBtn = document.getElementById("searchBtn");
// const apiLink = "abc819127a3593b03dcfcf4f23e92b49";

// // Function to fetch and display weather per user input
// async function fetchWeather(city) {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiLink}`
//     );
//     const data = await res.json();
//     const temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);

//     if (data.name != "san francisco") {
//       resultEl.innerHTML = `<img
//           src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
//           alt="icon"
//         /><h2>${data.name}</h2> <h4>${temperature} °F</h4> <h4>${data.weather[0].description}</h4>`;
//     } else {
//       resultEl.innerText = "Weather not found";
//     }
//   } catch (err) {
//     console.error("Fetch error:", err);
//     resultEl.innerText = "Error fetching weather";
//   }
// }

// // Show San Francisco weather on page load
// window.onload = () => {
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=san francisco&appid=${apiLink}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       const temperature = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);

//       const weatherHtml = `<h4>San Francisco</h4> <h3>${temperature} °F</h3> <h4 class="text-lg">${data.weather[0].description}</h4>`;
//       initialEl.innerHTML = weatherHtml;
//     })
//     .catch((err) => console.error("Fetch error:", err));
// };

// // Allow user to search for their city
// searchBtn.addEventListener("click", () => {
//   const city = cityInput.value.trim();
//   if (city) {
//     fetchWeather(city);
//     cityInput.value = "";
//     cityInput.focus();
//   }
// });
// // 🔑 Search on Enter key
// cityInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault(); // Prevent form submission
//     searchBtn.click(); // Trigger same logic as button click
//   }
// });
