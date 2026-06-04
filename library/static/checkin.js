function checkIn(){

    let savedSeat =
        localStorage.getItem("reservedSeat");

    if(!savedSeat){
        alert("No reserved seat found.");
        window.location.href = "/book_seat";
    }

    let data = JSON.parse(savedSeat);

    data.status = "Occupied";

    data.checkinTime =
        new Date().toLocaleTimeString();

    localStorage.setItem(
        "reservedSeat",
        JSON.stringify(data)
    );

    alert("Check-In Successful!");

    window.location.href = "/book_seat";
}