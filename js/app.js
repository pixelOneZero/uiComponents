(() => {
	window.addEventListener("load", () => {
		let seconds = 0;
		let minutes = 0;
		let timer = document.querySelector('.timer');

		const timerInterval = setInterval(()=> {
			let zeroPadSeconds = (seconds < 10) ? '0' : '';
			let zeroPadMinutes = (minutes < 10) ? '0' : '';
			timer.innerText = `${zeroPadMinutes}${minutes}:${zeroPadSeconds}${seconds}`;
			seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
		}, 1000);

		const clearTimer = () => {
			clearInterval(timerInterval);
			blink();
		};

		const blink = () => {
			setInterval(() => {
				timer.innerText = (timer.innerText === '0:00') ? 'done' : '0:00'
			}, 1000);
		}

	});
})();