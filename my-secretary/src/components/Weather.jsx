const Weather = () => {
  //Using Geolocation API

  function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);

    const APIkey = "97a5bcc3349018be2aa20b94c2ed9e5e";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const span1 = document.querySelector("#weather span:first-child");
        const span2 = document.querySelector("#weather span:nth-child(2)");
        const span3 = document.querySelector("#weather span:last-child");

        span1.innerText = `${data.weather[0].main} / ${data.main.temp_min}`; //�� �̰� city�� �ƴ϶� ���׷� ������?
        span2.innerText = `~ ${data.main.temp_max}`;
        span3.innerText = data.name;
      });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  return (
    <>
      <div>weather</div>
    </>
  );
};

export default Weather;
