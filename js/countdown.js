const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

const endDate = "2021-09-28T15:00:00.000Z";
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

function setupCountdown() {
	return setInterval(() => {
		const remaining = getRemaining();

		setDisplay(remaining);

		if (remaining.distance <= 0) {
			const header = document.getElementById("countdown-header");
			const countdown = document.getElementById("countdown");

			header.innerText = `New World is out!`;
			countdown.style.display = "none";
		}
	}, 1000);
}

// COUNTDOWN START
const interval = setupCountdown();
