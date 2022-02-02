document.addEventListener('DOMContentLoaded', function() {
	// $('body').hide()

	//Timer --------------------
		
	let timer; // пока пустая переменная
	const secondTimer = document.querySelector('.board .seconds');

	let x = 6;
	function countdown(){  // функция обратного отсчета
		secondTimer.innerText = x;
		x--; // уменьшаем число на единицу
		if (x<0){
			clearTimeout(timer); // таймер остановится на нуле
		} else {
			timer = setTimeout(countdown, 1000);
		}
	}

	//Background ------------------

	const bgItem = document.querySelector(".bgImage");
	const currentImg = bgItem.style.backgroundImage;

	let allImagesNode
	if ($(window).width() > 576) {
		console.log("PC");
		allImagesNode = document.querySelectorAll(".imageFromAdminPC");
	} else {
		console.log("Mobile");
		allImagesNode = document.querySelectorAll(".imageFromAdminMOB");
	}
	const allImagesArray = Array.prototype.slice.call(allImagesNode);	
	const allImagesUrl = allImagesArray.map((elem) => {
		return elem.innerText;
	})

	console.log(allImagesUrl);
	const amountImages = allImagesUrl.length;


	const changeImg = (imgUrl) => {
		bgItem.style.backgroundImage = `url('${imgUrl}')`;
	}
	changeImg(allImagesUrl[0]);
	
	countdown();
	const changeBgImage = () => {
		setInterval(() => {
			const numberImage = random(0, amountImages - 1);
			$(bgItem).fadeOut(0);
			changeImg(allImagesUrl[numberImage]);
			$(bgItem).fadeIn(200);
			x = 6;
		}, 6000)
	}
	changeBgImage();

	//-----------------------------
	
	//Clicker ------------------

	const clickAmount = document.querySelector(".clickAmount").innerText;
	let nowClick = 0;

	const nowClickHtml = document.querySelector(".clickAmountWrapper .nowClick");
	const clickAmountHtml = document.querySelector(".clickAmountWrapper .from");

	clickAmountHtml.innerText = clickAmount;
	nowClickHtml.innerText = nowClick;

	//-----------------------------

	//Cursor --------------------
	const random = (min, max) => {
		const rand = min + Math.random() * (max - min + 1);
		return Math.floor(rand);
	}

	const btn = document.querySelector('#btn');
	btn.addEventListener('click', () => {
		btn.style.left = `${random(0, 90)}%`;
		btn.style.top = `${random(0, 90)}%`;

		nowClick++;
		nowClickHtml.innerText = nowClick;

		if (nowClick == clickAmount) {
			localStorage.setItem("mayEnterSecondPage", "true")
			setTimeout(() => {
				window.location.href = 'TZ2.html';
			}, 500)
			
		}

	});

	//-----------------------------

	

})
