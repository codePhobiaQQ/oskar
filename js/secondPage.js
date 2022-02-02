document.addEventListener('DOMContentLoaded', function() {

    console.log(localStorage.getItem('mayEnterSecondPage'));

    if (localStorage.getItem('mayEnterSecondPage') != "true") {
        window.location.href = 'index.html';
    }
    
    // localStorage.removeItem('mayEnterSecondPage');





    const random = (min, max) => {
		const rand = min + Math.random() * (max - min + 1);
		return Math.floor(rand);
	}

    const numb = random(4, 10);
    document.querySelector(".howMuch").innerText = numb;

})
