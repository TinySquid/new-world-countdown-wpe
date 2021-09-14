const container = document.getElementById("container");

window.wallpaperPropertyListener = {
	applyUserProperties: function (properties) {
		if (properties.countdownx) {
			container.style.left = container.offsetLeft - properties.countdownxposition.value + "px";
		}
		if (properties.countdowny) {
			container.style.top = container.offsetTop - properties.countdownyposition.value + "px";
		}
	}
};
