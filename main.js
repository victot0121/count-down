const countdown = () => {
    const countDate = new Date("December 31, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute =  second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHours = Math.floor((gap % day) /hour) ;
    const textminute= Math.floor((gap % hour) /minute);
    const textsecond = Math.floor((gap % minute) /second);

    document.querySelector(".day").innerHTML=textDay;
    document.querySelector(".hour").innerHTML=textHours;
    document.querySelector(".minute").innerHTML=textminute;
    document.querySelector(".second").innerHTML= textsecond;

   
   
};

setInterval(countdown, 1000);


const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
   let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }
    if (password.value.length <= 6) {
        messages.push('password must be longer then 6 character')
    }


    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')

  }
})
