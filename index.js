async function apiFetch() {
    const AQI = (city) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a357e3a3c9mshb82cc6e9d3cabdep1cb5ebjsn2087868f595d",
          "X-RapidAPI-Host": "air-quality-by-api-ninjas.p.rapidapi.com"
        }
      };
  
      fetch(
        "https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" +
          city,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log("success");
          co.innerHTML = response.CO.aqi;
          no2.innerHTML = response.NO2.aqi;
          o3.innerHTML = response.O3.aqi; 
          so2.innerHTML = response.SO2.aqi; 
          PM.innerHTML = response.PM10.aqi;
          overall.innerHTML = response.overall_aqi;
          co_conc.innerHTML = response.CO.concentration;
          no2_conc.innerHTML = response.NO2.concentration;
          o3_conc.innerHTML = response.O3.concentration;
          so2_conc.innerHTML = response.SO2.concentration;
          PM_conc.innerHTML = response.PM10.concentration;
          
        })
        .catch((err) => console.error(err));
    };
    submitbtn.addEventListener("click", (e) => {
      e.preventDefault();
      AQI(searchinput.value);
    });
    
    const weather = (city) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "a357e3a3c9mshb82cc6e9d3cabdep1cb5ebjsn2087868f595d",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
        }
      };
  
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          console.log("success");
         
          temp.innerHTML = response.temp;
           mintemp.innerHTML = response.min_temp;
          maxtemp.innerHTML = response.max_temp;
          Windspeed.innerHTML = response.wind_speed;
          Winddegree.innerHTML = response.wind_degrees;
           humidity.innerHTML = response.humidity;
           cloudPct.innerHTML = response.cloud_pct;
          sunrise.innerHTML = response.sunrise;
          sunset.innerHTML = response.sunset;
          feelsLike.innerHTML = response.feels_like;
          table_head.innerHTML = "HERE IS  "+city.toUpperCase()+"'S"+" WEATHER AND AQI ! ";
        })
        .catch((err) => console.error(err));
    };
    submitbtn.addEventListener("click", (e) => {
      e.preventDefault();
      weather(searchinput.value);
    });
    clearbtn.addEventListener("click", (e) => {
      e.preventDefault();
      table_head.innerHTML = "YOUR CITY";
      searchinput.value = "";
      cloudPct.innerHTML = "";
      temp.innerHTML = "";
      feelsLike.innerHTML = "";
      humidity.innerHTML = "";
      mintemp.innerHTML = "";
      maxtemp.innerHTML = "";
      Windspeed.innerHTML = "";
      Winddegree.innerHTML = "";
      sunrise.innerHTML = "";
      sunset.innerHTML = "";
      co_conc.innerHTML = "";
      co.innerHTML = "";
      no2_conc.innerHTML = "";
      no2.innerHTML = "";
      o3_conc.innerHTML = "";
      o3.innerHTML = "";
      so2_conc.innerHTML = "";
      so2.innerHTML = "";
      PM.innerHTML = "";
      PM_conc.innerHTML = "";
      overall.innerHTML = "";
     
    });
  
    return Promise.all([AQI, weather]);
    
  }
  apiFetch().then((res) => console.log(res));
  
