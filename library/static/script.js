let startTime = localStorage.getItem("reservationStart");

let savedSeat = localStorage.getItem("reservedSeat");

let isOccupied = false;

if(savedSeat){

    let data = JSON.parse(savedSeat);

    if(data.status === "Occupied"){
        isOccupied = true;

        document.getElementById("countdown").innerText =
            "Checked In";
    }
}

if(startTime && !isOccupied){

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
else if(!savedSeat){

    document.getElementById("countdown").innerText =
        "No Reservation";
}

window.onload = function(){

    let savedSeat =
        localStorage.getItem("reservedSeat");

    if(savedSeat){

    let data = JSON.parse(savedSeat);

    if(data.status === "Occupied"){

        document.getElementById("countdown").innerText =
            "Checked In";
    }

    document.getElementById("seat-number").innerText =
        data.seat;

    document.getElementById("seat-floor").innerText =
        data.floor.charAt(0).toUpperCase() +
        data.floor.slice(1) + " Floor";

    document.getElementById("seat-status").innerText =
        data.status || "Reserved";

    document.getElementById("checkin-time").innerText =
        data.checkinTime || "--";
}

    let totalSeats = 450;

if(savedSeat){

    let data = JSON.parse(savedSeat);

    if(data.status === "Occupied"){

        document.getElementById("occupied-seats").innerText = 1;
        document.getElementById("reserved-seats").innerText = 0;
        document.getElementById("available-seats").innerText = totalSeats - 1;

    }
    else{

        document.getElementById("occupied-seats").innerText = 0;
        document.getElementById("reserved-seats").innerText = 1;
        document.getElementById("available-seats").innerText = totalSeats - 1;

    }

}
else{

    document.getElementById("occupied-seats").innerText = 0;
    document.getElementById("reserved-seats").innerText = 0;
    document.getElementById("available-seats").innerText = totalSeats;

}
}