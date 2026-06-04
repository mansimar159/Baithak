let selectedSeat = null;
let reservedSeat = null;

function selectSeat(seat){

    if(reservedSeat){
        alert("You already have a reserved seat. Cancel it first.");
        return;
    }

    document.querySelectorAll('.seat-box').forEach(box => {
        box.classList.remove('clicked');
    });

    seat.classList.add('clicked');
    selectedSeat = seat;
}

function confirmSeat(){

    if(selectedSeat){

        selectedSeat.classList.remove('clicked');
        selectedSeat.classList.add('reserved');

        reservedSeat = selectedSeat;

        localStorage.setItem(
            "reservationStart",
            new Date().getTime()
        );

        localStorage.setItem(
    "reservedSeat",
    JSON.stringify({
        floor: reservedSeat.dataset.floor,
        seat: reservedSeat.innerText.trim(),
        status: "Reserved"
    })
);

        selectedSeat = null;

        alert("Seat Reserved Successfully!");
    }
    else{
        alert("Please select a seat first.");
    }
}

function cancelSeat(){

    if(reservedSeat){

        reservedSeat.classList.remove(
            'reserved',
            'occupied'
        );

        localStorage.removeItem("reservedSeat");
        localStorage.removeItem("reservationStart");

        reservedSeat = null;
        selectedSeat = null;
    }
    else{
        alert("No seat reserved.");
    }
}

console.log("Reached checkIn definition");

function checkIn(){

    console.log(reservedSeat);

    if(!reservedSeat){

        alert("Reserve a seat first.");
        return;
    }

    reservedSeat.classList.remove("reserved");
    reservedSeat.classList.add("occupied");

    let data = JSON.parse(
        localStorage.getItem("reservedSeat")
    );

    data.status = "Occupied";

    data.checkinTime =
        new Date().toLocaleTimeString();

    localStorage.setItem(
        "reservedSeat",
        JSON.stringify(data)
    );

    alert("Check-In Successful!");
}

window.onload = function(){

    let savedSeat = localStorage.getItem("reservedSeat");

    if(savedSeat){

        let data = JSON.parse(savedSeat);

        document.querySelectorAll(".seat-box").forEach(box => {

            if(
                box.dataset.floor === data.floor &&
                box.innerText.trim() === data.seat
            ){

                if(data.status === "Occupied"){
                    box.classList.add("occupied");
                }
                else{
                    box.classList.add("reserved");
                }

                reservedSeat = box;
            }
        });
    }
}