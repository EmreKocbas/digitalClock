const p = prompt("Hello, welcome! Please enter your name.")
let name = document.querySelector("#name")

name.innerHTML = `Hello ${p.toUpperCase()}, Welcome!`

function GetTime() {

    let now = new Date()

    const hours = document.querySelector("#hours")
    const minutes = document.querySelector("#minutes")
    const seconds = document.querySelector("#second")
    const day = document.querySelector("#day")

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    (hours.innerHTML <= 9) ? hours.innerHTML = ("0" + h) : hours.innerHTML = h;
    (minutes.innerHTML <= 9) ? minutes.innerHTML = ("0" + m) : minutes.innerHTML = m;
    (seconds.innerHTML <= 9) ? seconds.innerHTML = ("0" + s) : seconds.innerHTML = s;

    const date = now.getDate()
    const month = now.getMonth()
    const fullYear = now.getFullYear()

    day.innerHTML = date + "/" + ((month < 10) ? "0" + (month + 1) :month + 1) + "/" + fullYear

}
setInterval(function () { GetTime() }, 1000)