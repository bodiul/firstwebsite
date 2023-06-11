let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let hou = document.getElementById('hou');
let minu = document.getElementById('minu');
let seco = document.getElementById('seco');
let ho = document.getElementById('ho');
let mi = document.getElementById('mi');
let se = document.getElementById('se');

let set_clock = setInterval(() =>{

    let now_date = new Date();
    let hr = now_date.getHours();
    let min = now_date.getMinutes();
    let sec = now_date.getSeconds();
    if(hr > 12){
        hr = hr - 12;
    }
    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

});
let today = new Date();
        const daynum = today.getDate();
        const yearr = today.getFullYear();
        const dayname = today.toLocaleString("default",{weekday: "long"});
        const monthname = today.toLocaleString("default",{month: "long"});
        document.querySelector(".month").innerHTML = monthname;
        document.querySelector(".day").innerHTML = dayname;
        document.querySelector(".year").innerHTML = yearr;
        document.querySelector(".tarik").innerHTML = daynum;


        let set_clock_2 = setInterval(() =>{

    let now_date = new Date();
    let hr = now_date.getHours();
    let min = now_date.getMinutes();
    let sec = now_date.getSeconds();
    if(hr > 12){
        hr = hr - 12;
    }
    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    hou.textContent = hr;
    minu.textContent = min;
    seco.textContent = sec;

});
let toda = new Date();
        const day = today.getDate();
        const year = today.getFullYear();
        const daynam = today.toLocaleString("default",{weekday: "long"});
        const monthnam = today.toLocaleString("default",{month: "long"});
        document.querySelector(".m").innerHTML = monthnam;
        document.querySelector(".d").innerHTML = daynam;
        document.querySelector(".y").innerHTML = year;
        document.querySelector(".t").innerHTML = day;
        
        let set_clock_3 = setInterval(() =>{

   
   
            let now_date = new Date();
    let hr = now_date.getHours();
    let min = now_date.getMinutes();
    let sec = now_date.getSeconds();
    if(hr > 12){
        hr = hr - 12;
    }
    if(hr < 10){
        hr = '0' + hr;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    ho.textContent = hr;
    mi.textContent = min;
    se.textContent = sec;

});
let tod = new Date();
        const da = today.getDate();
        const ye = today.getFullYear();
        const dayna = today.toLocaleString("default",{weekday: "long"});
        const monthna = today.toLocaleString("default",{month: "long"});
        document.querySelector(".mo").innerHTML = monthna;
        document.querySelector(".da").innerHTML = dayna;
        document.querySelector(".ye").innerHTML = ye;
        document.querySelector(".ta").innerHTML = da;