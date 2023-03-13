const soTienVay = document.getElementById("so-tien-vay");
const laiSuatNam = document.getElementById("lai-suat-nam");
const thoiGianTra = document.getElementById("thoi-gian-tra");
const tinhButton = document.getElementById("tinh");
const soTienHangThang = document.getElementById("so-tien-hang-thang");
const tongSoTienPhaiTra = document.getElementById("tong-so-tien-phai-tra");
const tongSoLaiPhaiTra = document.getElementById("tong-so-lai-phai-tra");

// Thêm sự kiện click cho nút "Tính"
tinhButton.addEventListener("click", function() {
	// Lấy giá trị từ các phần tử input
	const vay = Number(soTienVay.value);
	const laiSuat = Number(laiSuatNam.value) / 100;
	const thoiGian = Number(thoiGianTra.value);

	// Tính số tiền phải trả hàng tháng
	const soTienHangThangValue = vay * laiSuat / 12 * Math.pow(1 + laiSuat / 12, thoiGian * 12) / (Math.pow(1 + laiSuat / 12, thoiGian * 12) - 1);
	soTienHangThang.value = soTienHangThangValue.toFixed(2);

	// Tính tổng số tiền phải trả
	const tongSoTienPhaiTraValue = soTienHangThangValue * thoiGian * 12;
	tongSoTienPhaiTra.value = tongSoTienPhaiTraValue.toFixed(2);

	// Tính tổng số lãi phải trả
	const tongSoLaiPhaiTraValue = tongSoTienPhaiTraValue - vay;
	tongSoLaiPhaiTra.value = tongSoLaiPhaiTraValue.toFixed(2);
});