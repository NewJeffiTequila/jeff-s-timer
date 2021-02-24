function start() {
    const startMinutes = 30;
    let time = startMinutes * 60;
    const countdown = document.getElementById('time');
    const interval = setInterval(() => {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;


        if( minutes === 0 && seconds === '00'){
        notifyMe()
        clearInterval(interval);
        }
    }, 1000);
}

function notifyMe() {
    if (!("Notification" in window)) 
    {
        alert("Este browser não suporta notificações de Desktop");
    }
    else if (window.Notification&&Notification.permission!=="denied") 
    {
        Notification.requestPermission(function (status) {
            let notitifacao = new Notification('Title' ,{ body: 'Corpo'});
        })
    }
}

function breakTime() {
    const startMinutes = 5;
    let time = startMinutes * 60;
    const countdown = document.getElementById('time');
    const interval = setInterval(() => {
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdown.innerHTML = `${minutes}:${seconds}`;
        time--;


        if( minutes === 0 && seconds === '00'){
        notifyMe()
        clearInterval(interval);
        }
    }, 1000);

}