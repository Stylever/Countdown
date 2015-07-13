var countdown = {
	totalSeconds: 120,
	countdownDiv: document.getElementById("secondsDiv"),
	clip1: document.getElementById("countdown-left"),
	clip2: document.getElementById("countdown-right"),
	rotateFun: function (seconds) {
		var degree = 0;
		if (countdown.totalSeconds / 2 <= seconds) { // 左侧旋转
			degree = (countdown.totalSeconds - seconds) * 180 / (countdown.totalSeconds / 2);

			countdown.clip1.style.webkitTransform = 'rotate(-' + degree + 'deg)';
			countdown.clip1.style.MozTransform = 'rotate(-' + degree + 'deg)';
			countdown.clip1.style.msTransform = 'rotate(-' + degree + 'deg)';
			countdown.clip1.style.transform = 'rotate(-' + degree + 'deg)';
		} else { // 右侧旋转
			degree = (seconds - countdown.totalSeconds / 2) * 360 / countdown.totalSeconds ;

			countdown.clip2.style.webkitTransform = 'rotate(' + degree + 'deg)';
			countdown.clip2.style.MozTransform = 'rotate(' + degree + 'deg)';
			countdown.clip2.style.msTransform = 'rotate(' + degree + 'deg)';
			countdown.clip2.style.transform = 'rotate(' + degree + 'deg)';
		}
	},
	countdownFun: function (seconds) {
		if (seconds >= 0) {
			countdown.timeout = setTimeout( function () {
				countdown.rotateFun(seconds);
				countdown.countdownDiv.innerHTML = seconds;
				countdown.countdownFun(seconds - 1);
			}, 1000);
		}
	},
	init: function () {
		countdown.countdownFun(countdown.totalSeconds - 1);
	}
};
countdown.init();