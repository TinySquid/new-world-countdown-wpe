const images = ["NewWorld_keyart.jpg", "NewWorld_keyart2.jpg", "NewWorld_keyart3.jpg"]

const background = document.querySelector("#background");

// Default image
background.style.backgroundImage = "url('./img/NewWorld_keyart.jpg')";

// Change image
window.wallpaperPropertyListener = {
	applyUserProperties: function (properties) {
		if (properties.backgroundimage) {
			background.style.backgroundImage = `url('./img/${images[Number(properties.backgroundimage.value)]}')`;
		}
	}
}