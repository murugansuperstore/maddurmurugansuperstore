
    // Set the date we're counting down to
    const offerEndDate = new Date("2024-10-31T23:59:59").getTime(); // Replace with your end date and time

    // Update the countdown every 1 second
    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = offerEndDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the countdown element
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the countdown is over, display some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Offer has ended!";
        }
    }, 1000);

