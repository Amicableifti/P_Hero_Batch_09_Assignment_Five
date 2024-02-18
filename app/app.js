// All JS
// Get Class
const allSeat = getByClassName("select-seat");

// For Loop
let totalseat = 8;
let count = 0;
let total = 0;
let grandTotal = 0;
for (const seat of allSeat) {
    seat.addEventListener("click", function (event) {
        // Count Increased
        count = count + 1;
        total = total + 550;
        totalseat = totalseat - 1;
        grandTotal = grandTotal + 550;
        var myArray = [];

        //get Clicked Seat number
        const seatNumber = event.target.innerText;
        const seatNumberhtml = event.target;
        // Push Array
        myArray.push(seatNumber);

        //Get Ticket Price
        const ticketPrice = getById("ticket-price");

        // Div P1
        const seatList = getElById("seat-list");

        // CREATE ELEMENT NOW For Ticket NAME
        const p1 = document.createElement("span");
        p1.innerText = seatNumber;

        // CREATE ELEMENT NOW For Ticket NAME
        const p2 = document.createElement("p");
        p2.innerText = "Economoy";
        // CREATE ELEMENT NOW For Ticket NAME
        const p3 = document.createElement("p");
        p3.innerText = ticketPrice;

        //Validation check
        console.log(count);
        if (count > 4) {
            alert("You can buy only four");
        }
        else {
            // 
            removeElemet("btn-sub");
            // Append In P Tage Ticket Name
            seatList.appendChild(p1);
            // Append In P Tage Ticket Price
            seatList.appendChild(p2);
            // Append In P Tage Ticket Price
            seatList.appendChild(p3);

            seatNumberhtml.classList.add('!bg-green-500')
            // Set Seat Number 
            setInnerText("seat-number-show", totalseat)
            // Count
            setInnerText("seat-add", count);
            // Set Totdal Price
            setInnerText("total-price", total);
            // Set Total Price
            setInnerText("grand-total", grandTotal);
            return 0;
        }


    })


}

