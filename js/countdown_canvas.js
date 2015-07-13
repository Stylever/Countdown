// 120s倒计时
var countdown = {
	degree: 0,
	totoalSeconds: 120,
	secondsDiv: document.getElementById("secondsDiv"),
	countdownFun: function (seconds) { // 倒计时函数
		countdown.degree = 1.5 * Math.PI - (countdown.totoalSeconds - seconds) * Math.PI / 60;

		if (seconds === countdown.totoalSeconds) {
			countdown.degree = - 0.5 * Math.PI;
		}
		if (countdown.degree < 0) {
			countdown.degree = (2 + 1.5) * Math.PI - (countdown.totoalSeconds - seconds) * Math.PI / 60;
		} 
		
		if (seconds >= 0) {
			setTimeout( function () {
				countdown.drawCircle(countdown.degree);
				countdown.secondsDiv.innerHTML = seconds;
				countdown.timeout = countdown.countdownFun(seconds - 1);
			}, 1000);
		}
	},
	initCanvas: function () { // canvas 初始化
		countdown.canvas = document.getElementById("loop");
		countdown.context = countdown.canvas.getContext("2d");
		countdown.canvas.width = 400;
		countdown.canvas.height = 400;
	},
	drawCircle: function (degree) { // 画圆
		countdown.context.clearRect(0, 0, countdown.canvas.width, countdown.canvas.height);
		countdown.drawBackgroundCircle();
		countdown.drawCountDownCircle(degree);
	},
	drawBackgroundCircle: function () { // 背景圆
		countdown.context.beginPath();
		countdown.context.strokeStyle = "#ccffff";
		countdown.context.lineWidth = 12;
		countdown.context.arc(200, 200, 100, 0, 2 * Math.PI , true); // true为逆时针绘制
		countdown.context.stroke();
	},
	drawCountDownCircle: function (degree) { // 倒计时圆
		console.log("drawCountDownCircle: " + degree);
		countdown.context.beginPath();
		countdown.context.strokeStyle = "#00b38a";
		countdown.context.lineWidth = 12;
		countdown.context.arc(200, 200, 100, degree, 1.5 * Math.PI , true); // true为逆时针绘制
		countdown.context.stroke();
	},
	init: function () {
		countdown.initCanvas();
		countdown.countdownFun(countdown.totoalSeconds);
	}
}
countdown.init();