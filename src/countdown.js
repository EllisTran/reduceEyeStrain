
function countdownTimeStart(secondsToConvert, isPopup) {

	var secondstoMs = secondsToConvert * 1000;
	var countDownDate = new Date().getTime() + secondstoMs;
	// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById("demo").innerHTML = hours + "h "
			+ minutes + "m " + seconds + "s ";

		// If the count down is over, write some text 
		if (distance <0) {
			console.log("Audio");
			var audio = document.getElementById("audio");
			audio.play();
			if (isPopup) {
				clearInterval(x);
				window.close();
			} else if (!isPopup) {
				clearInterval(x);
				console.log("not popup");
				countdownTimeStart(secondsToConvert, false);
				popup('src/test.html', 'TWENTY TWENTY TWENTY');
				// document.getElementById("demo").innerHTML = "EXPIRED";

			}
		}
	}, 1000);
}

function popup(mylink, windowname) {
	if (!window.focus) return true;
	var href;
	if (typeof (mylink) == 'string') href = mylink;
	else href = mylink.href;
		window.open(href, "_blank"); return false;
}
