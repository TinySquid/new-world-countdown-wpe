const SECOND = 1000,
	MINUTE = SECOND * 60,
	HOUR = MINUTE * 60,
	DAY = HOUR * 24;

const header = document.querySelector("#countdown-header");
const container = document.querySelector("#container");
const ulList = document.querySelector("ul");

const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Init countdown NA WEST
let endDateUTC = LAUNCH_DATES["NAW"];
let countdown = new Date(endDateUTC).getTime();

// Show timer before waiting on interval on first load.
updateCountdown();

let interval = setInterval(setupCountdown, 1000);

function resetCountdown(toDateUTC) {
	clearInterval(interval);

	endDateUTC = toDateUTC;
	countdown = new Date(endDateUTC).getTime();

	interval = setInterval(setupCountdown, 1000);
}

function showCountdown() {
	container.style.display = "block";
}

function hideCountdown() {
	container.style.display = "none";
}

function updateCountdown() {
	const remaining = getRemaining();

	days.innerHTML = remaining.days;
	hours.innerHTML = remaining.hours;
	minutes.innerHTML = remaining.minutes;
	seconds.innerHTML = remaining.seconds;

	return remaining;
}

function getRemaining() {
	const now = new Date().getTime();
	const distance = countdown - now;

	return {
		days: Math.floor(distance / DAY),
		hours: Math.floor((distance % DAY) / HOUR),
		minutes: Math.floor((distance % HOUR) / MINUTE),
		seconds: Math.floor((distance % MINUTE) / SECOND),
		distance: distance
	};
}

function setupCountdown() {
	const { distance } = updateCountdown();

	if (distance <= 0) {
		header.innerText = `New World is out!`;
		ulList.style.display = "none";

		clearInterval(interval);
	}
}
