document.addEventListener("DOMContentLoaded",function(){
	var nutPhai = document.querySelector('.nuts b.phai');
	var nutTrai = document.querySelector('.nuts b.trai');
	var slides = document.querySelectorAll('.slides ul li');
	var chiSoHienTai = 0;
	var soLuongSlide = slides.length;
	var trangThai = 'dangDungYen';

	function xacDinh2SlidevaChuyenDong(nutnao) {
		if (trangThai == 'dangChuyenDong') 
		{
			return false;
		}
		//đánh dấu là đang chuyển động
		trangThai = 'dangChuyenDong';
		var trangThaiCua2ChuyenDong = 0;
		var phanTuHienTai = slides[chiSoHienTai];


		if (nutnao == 'nutTrai') {
			chiSoHienTai = (chiSoHienTai > 0)? chiSoHienTai-1:soLuongSlide-1; //Sử dụng toán tử 3 ngôi đóng gói code
		}


		else if (nutnao == 'nutPhai') {
			chiSoHienTai = (chiSoHienTai < soLuongSlide-1)? chiSoHienTai+1:chiSoHienTai=0;
		}
		var phanTuTiepTheo = slides[chiSoHienTai];

		var xuLyHienTaiKetThucCD = function () {
			// console.log("Xong slide hiện tại");
			this.classList.remove('dangxem');
			this.classList.remove((nutnao == 'nutTrai')? ('bienMatKhiAnPrev'):('bienMatKhiAnNext')); //Sử dụng toán tử 3 ngôi
			trangThaiCua2ChuyenDong++; //=1
			trangThai = (trangThaiCua2ChuyenDong==2)? 'dangDungYen': trangThai;
		}
		

		var xuLyTiepTheoKetThucCD  = function () {
			// console.log('Xong slide tiếp theo');
			this.classList.remove((nutnao == 'nutTrai')? ('diVaoKhiAnPrev'):('diVaoKhiAnNext'));
			
			this.classList.add('dangxem');
			trangThaiCua2ChuyenDong++; //=1
			trangThai = (trangThaiCua2ChuyenDong==2)? 'dangDungYen': trangThai;
		}
		phanTuTiepTheo.addEventListener('webkitAnimationEnd',xuLyTiepTheoKetThucCD);
		phanTuHienTai.addEventListener('webkitAnimationEnd',xuLyHienTaiKetThucCD);
		//Khi chuyển động
		// if (nutnao == 'nutTrai') {
		// 	phanTuHienTai.classList.add('bienMatKhiAnPrev');
		// 	phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
		// }
		// else if (nutnao == 'nutPhai') {
		// 	phanTuHienTai.classList.add('bienMatKhiAnNext');
		// 	phanTuTiepTheo.classList.add('diVaoKhiAnNext');
		// }
		phanTuHienTai.classList.add((nutnao == 'nutTrai')?'bienMatKhiAnPrev':'bienMatKhiAnNext'); // 3 ngôi
		phanTuTiepTheo.classList.add((nutnao == 'nutTrai')?'diVaoKhiAnPrev':'diVaoKhiAnNext');
	}

	//Gọi sự kiện click cho nút phải
	var chuyenSlideChoNutPhai = function () {
		xacDinh2SlidevaChuyenDong('nutPhai');		
	}
	
	var chuyenSlideChoNutTrai = function () {
		xacDinh2SlidevaChuyenDong('nutTrai');	
	}

	nutTrai.addEventListener('click',chuyenSlideChoNutTrai);
	nutPhai.addEventListener('click',chuyenSlideChoNutPhai);

},false)