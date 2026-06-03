let startTime = localStorage.getItem("reservationStart");

if(startTime){

    let reservationDuration = 30 * 60 * 1000;

    function updateTimer(){

        let now = new Date().getTime();

        let remaining =
            reservationDuration -
            (now - startTime);

        if(remaining <= 0){

    clearInterval(timer);

    localStorage.removeItem("reservationStart");
    localStorage.removeItem("reservedSeat");

    document.getElementById("countdown").innerText =
    "Expired";

    alert("Reservation Expired!");

    window.location.href = "{% url 'seat' %}";

    return;
}

        let minutes =
            Math.floor(remaining / 1000 / 60);

        let seconds =
            Math.floor((remaining / 1000) % 60);

        document.getElementById("countdown").innerText =
            String(minutes).padStart(2,'0')
            + ":" +
            String(seconds).padStart(2,'0');
    }

    updateTimer();

    let timer = setInterval(updateTimer,1000);
}
else{

    document.getElementById("countdown").innerText =
    "No Reservation";

}

window.onload = function(){

    let savedSeat =
        localStorage.getItem("reservedSeat");

    if(savedSeat){

        let data = JSON.parse(savedSeat);

        document.getElementById("seat-number").innerText =
            data.seat;

        document.getElementById("seat-floor").innerText =
            data.floor.charAt(0).toUpperCase() +
            data.floor.slice(1) + " Floor";

        document.getElementById("seat-status").innerText =
            "Reserved";
    }

    let reservedData = localStorage.getItem("reservedSeat");

    let totalSeats = 450;

    if(reservedData){

        document.getElementById("reserved-seats").innerText = 1;
        document.getElementById("available-seats").innerText = totalSeats - 1;
    }
    else{

        document.getElementById("reserved-seats").innerText = 0;
        document.getElementById("available-seats").innerText = totalSeats;
    }

    document.getElementById("occupied-seats").innerText = 0;
}