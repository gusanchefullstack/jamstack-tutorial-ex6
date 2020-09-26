
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  const url = `/.netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}&units=metric`;

  fetch(url)
    .then((response) => {
      console.log(response.json);
      return response.json();
    })
    .then( (data)=> {
      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp;
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].description;

      document.querySelector("#weather").classList.remove("hidden");
    });

  }

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error); //options es el tercer parametro

}


