// Tính lương
function tinhLuong() {
    var soNgayLam = +document.getElementById("soNgayLam").value;
    var luongMoiNgay = 100000; 
    var luong = soNgayLam * luongMoiNgay;
    console.log("👽 ~ tinhLuong ~ luong:", luong);
    var result = document.getElementById("resultLuong");
    result.innerHTML=`<h3>Kết quả là ${luong}</h3>`;
}

// Tính giá trị trung bình
function giaTri() {
    var soThu1 = +document.getElementById("soThu1").value;
    var soThu2 = +document.getElementById("soThu2").value;
    var soThu3 = +document.getElementById("soThu3").value;
    var soThu4 = +document.getElementById("soThu4").value;
    var soThu5 = +document.getElementById("soThu5").value;
    var giaTriTB = ((soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5);
    console.log("👽 ~ giaTriTB:", giaTriTB);
    var result = document.getElementById("resultTrungBinh");
    result.innerHTML=`<h3>Kết quả là ${giaTriTB}</h3>`;
}

// Quy đổi giá trị tiền USD sang tiền VND
function doiTien(){
    var soTienUsd = +document.getElementById("soTienUsd").value;
    var giaTriUsd = 23500;
    var doiTien = soTienUsd * giaTriUsd;
    console.log("👽 ~ tienVnd ~ doiTien:", doiTien)
    var result = document.getElementById("resultDoiTien");
    result.innerHTML=`<h3>Kết quả là ${doiTien}</h3>`;
}

// Tính chu vi, diện tích hình chữ nhật
// diện tích = dài * rộng    chu vi = (dài+rộng)*2

function dienTich(){ 
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var dienTich = (chieuDai * chieuRong)
    console.log("👽 ~ dienTich:", dienTich)
    var result = document.getElementById("resultDienTich");
    result.innerHTML = `<h3>Kết quả là ${dienTich}</h3>`;
}
function chuVi(){ 
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    var chuVi = (chieuDai + chieuRong) * 2
    console.log("👽 ~ chuVi ~ chuVi:", chuVi)
    var result = document.getElementById("resultChuVi");
    result.innerHTML = `<h3>Kết quả là ${chuVi}</h3>`

}


// tính tổng 2 ký số
function tinhTong() {
    var soHaiChuSo = +document.getElementById("soHaiChuSo").value;

        var hangDonVi = soHaiChuSo % 10; 
        var hangChuc = Math.floor(soHaiChuSo / 10); 

        var tong = hangDonVi + hangChuc;
        console.log("👽 ~ tinhTong ~ tong:", tong)

        document.getElementById("tong").innerHTML = "Tổng hai ký số của " + soHaiChuSo + " là: " + tong;
        document.getElementById("result").style.display = "block";
   
}