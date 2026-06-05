let start =
    localStorage.getItem("warningStart");

if(start){

    let elapsed =
        Date.now() - start;

    let warning =
        localStorage.getItem("libraryWarning");

    if(
        warning === "true" &&
        elapsed >= 5 * 60 * 1000
    ){

        localStorage.removeItem(
            "reservedSeat"
        );

        localStorage.removeItem(
            "reservationStart"
        );

        localStorage.removeItem(
            "libraryWarning"
        );

        localStorage.removeItem(
            "warningStart"
        );

        alert(
            "Seat vacated due to leaving library without checkout."
        );
    }
}

window.onload = function(){

    let warning =
        localStorage.getItem("libraryWarning");

    if(warning === "true"){

        document.getElementById(
            "notification-message"
        ).innerText =
        "You have left the library without Temporary or Permanent Checkout. Go back and checkout within 5 minutes or your seat will be vacated.";
    }
    else{

        document.getElementById(
            "notification-message"
        ).innerText =
        "No Notifications";
    }
}