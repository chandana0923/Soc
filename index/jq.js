$(document).ready(function() {
    console.log("=== Weather Info Fetcher ===");

    const cityCoords = {
        "anantapur": { lat: 12.9716, lon: 77.5946 },
        "mumbai": { lat: 19.0760, lon: 72.8777 },
        "delhi": { lat: 28.7041, lon: 77.1025 },
        "chennai": { lat: 13.0827, lon: 80.2707 },
        "kolkata": { lat: 22.5726, lon: 88.3639 },
        "london": { lat: 51.5074, lon: -0.1278 },
        "newyork": { lat: 40.7128, lon: -74.0060 }
    };

    // Weather fetch button event handler
    $('#fetchWeatherBtn').click(function() {
        let city = $('#cityInput').val().toLowerCase();

        if (!cityCoords[city]) {
            $('#weatherResult').html("City not found in predefined list");
            return;
        }

        let coords = cityCoords[city];
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

        $.getJSON(url)
        .done(function(data) {
            if (data.current_weather) {
                $('#weatherResult').html(`
                    <h3>Weather in ${city}</h3>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
                    <p>Weather Code: ${data.current_weather.weathercode}</p>
                `);
            } else {
                $('#weatherResult').html("Weather data not available");
            }
        })
        .fail(function() {
            console.error('Error fetching weather data');
            $('#weatherResult').html("Error fetching weather data");
        });
    });

    // News API fetch
    const newsApiKey = "YOUR_NEWSAPI_KEY_HERE";  // Replace with your actual API key
    const newsUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=${newsApiKey}`;

    $.getJSON(newsUrl)
    .done(function(newsdata) {
        console.log("news data:", newsdata);
        let output = "<h3>News List</h3><ul>";
        $.each(newsdata.articles, function(i, article) {
            output += `<li>${article.title} (${article.publishedAt})</li>`;
        });
        output += "</ul>";
        $('#newsSection').html(output);
    })
    .fail(function() {
        console.error('Error fetching news data');
        $('#newsSection').html("Error fetching news data");
    });
});
