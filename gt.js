var nut = document.querySelector('.n1'),
	khoi = document.querySelector('.khoi');

//Kiểm tra kết thúc chuyển động
khoi.addEventListener('webkitAnimationEnd',function () {
	console.log('Kết thúc chuyển động');
	this.classList.add('dixuong');
})
nut.addEventListener('click',function () {
	khoi.classList.add('chuyendong');
})