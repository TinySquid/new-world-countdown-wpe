const container = document.getElementById("container");

const images = ["NewWorld_keyart.jpg", "NewWorld_keyart2.jpg", "NewWorld_keyart3.jpg"];

const background = document.querySelector("#background");

// Default image
background.style.backgroundImage = "url('./img/NewWorld_keyart.jpg')";

window.wallpaperPropertyListener = {
	applyUserProperties: function (properties) {
		if (properties.countdownxposition) {
			container.style.left = properties.countdownxposition.value + "px";
		}

		if (properties.countdownyposition) {
			container.style.top = properties.countdownyposition.value + "px";
		}

		if (properties.backgroundimage) {
			background.style.backgroundImage = `url('./img/${images[Number(properties.backgroundimage.value)]}')`;
		}
	}
};