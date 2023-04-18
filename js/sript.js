let h1 = document.querySelector('h1')
let wind = document.querySelector('#wind')
let hum = document.querySelector('#hum')
let searchInp = document.querySelector('input')
let searchBTN = document.querySelector('#searchBTN')


let API_KEY = '4f9dc827356314629e9dd48d2cebf4fa'

getWeather()
function getWeather(city = "samarkand") {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(({data}) => {
        console.log(data);
        h1.innerHTML = Math.round(data.main.temp) + "°"
        wind.innerHTML = `${data.wind.speed} km/h`
        hum.innerHTML = `${data.main.humidity} %`
    })
}

axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=samarkand&appid=${API_KEY}&units=metric`)
    .then(res => console.log(res))

searchBTN.onclick = () => {
    getWeather(searchInp.value)
}


