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
        seat: reservedSeat.innerText.trim()
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

        reservedSeat.classList.remove('reserved');

        localStorage.removeItem("reservedSeat");
        localStorage.removeItem("reservationStart");

        reservedSeat = null;
        selectedSeat = null;
    }
    else{
        alert("No seat reserved.");
    }
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
            box.classList.add("reserved");
            reservedSeat = box;
        }

    });
}

    if(data){

        document.querySelectorAll(".seat-box").forEach(box => {

            if(
                box.dataset.floor === data.floor &&
                box.innerText.trim() === data.seat
            ){
                box.classList.add("reserved");
                reservedSeat = box;
            }

        });
    }
}