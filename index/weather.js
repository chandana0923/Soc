console.log("=== Weather Info Fetcher ===");

// Predefined city -> coordinates
const cityCoords = {
    "anantapur": { lat: 12.9716, lon: 77.5946 },
    "mumbai": { lat: 19.0760, lon: 72.8777 },
    "delhi": { lat: 28.7041, lon: 77.1025 },
    "chennai": { lat: 13.0827, lon: 80.2707 },
    "kolkata": { lat: 22.5726, lon: 88.3639 },
    "london": { lat: 51.5074, lon: -0.1278 },
    "newyork": { lat: 40.7128, lon: -74.0060 }
};

// Event listener for button click
document.getElementById("fetchWeatherBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("weatherResult").innerHTML = "City not found in predefined list";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    // AJAX fetch
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("weatherResult").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                    <p>Weather Code: ${data.current_weather.weathercode}</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = "Weather data not available";
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById("weatherResult").innerHTML = "Error fetching weather data";
        });
});


//new api


url= "https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=a5f3b8f4b4c74f2e8f4d6e3c4e8f4d6e";

fetch(url)
.then(response=>response.json())
.then(newsdata=>{
    console.log("news data:",newsdata);
    let output="<h3>news list</h3><ul>";
    newsdata.articles.forEach(article=>{
        output+=`<li>${article.title} (${article.publishedAt})</li>`;
    });
    output+="</ul>";
    document.body.innerHTML+=output;
}
)
.catch(error=>console.error('error:',error));






