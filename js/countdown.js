const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

const endDate = "Sept 28, 2021 09:00:00";
const countdown = new Date(endDate).getTime();

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setDisplay(getRemaining());

function setDisplay(remaining) {
	days.innerHTML = remaining.days;
	hours.innerHTML = remaining.hours;
	minutes.innerHTML = remaining.minutes;
	seconds.innerHTML = remaining.seconds;
}

function getRemaining() {
	const now = new Date().getTime();
	const distance = countdown - now;

	return {
		days: Math.floor(distance / day),
		hours: Math.floor((distance % day) / hour),
		minutes: Math.floor((distance % hour) / minute),
		seconds: Math.floor((distance % minute) / second),
		distance: distance
	};
}

// COUNTDOWN
const interval = setInterval(() => {
	const remaining = getRemaining()
	
	setDisplay(remaining);

	if (remaining.distance < 0) {
		headlineRef.current.innerText = `New World is out!`;
		countdownRef.current.style.display = "none";
	}
}, 1000);