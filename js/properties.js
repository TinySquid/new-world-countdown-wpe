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

		if (properties.displaycountdown) {
			display = properties.displaycountdown.value;

			if (!!display) {
				showCountdown();
			} else {
				hideCountdown();
			}
		}

		if (properties.launchrollouttime) {
			resetCountdown(LAUNCH_DATES[properties.launchrollouttime.value]);
		}
	}
};
