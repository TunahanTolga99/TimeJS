let userName = prompt ("Please Type Your Name")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`



function displayTime(){
    let d =new Date ();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = new Date();
    let day = weekday[gun.getDay()];
    document.getElementById("myClock").innerHTML = hour + ":" + min + ":" + sec + ":" + day ;
    
}
setInterval(displayTime, 1000);