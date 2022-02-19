// Bài 1: Tính lương nhân viên
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập điểm 3 môn

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo biến cho math, physis, chemistry, khuVuc, doiTuong, rankk
-	Bước 3: Gán giá trị cho math, physis, chemistry
-	Bước 4: totalScore = Math.floor((math + physis + chemistry) / 3) + khuVuc + doiTuong;
-	Bước 5: dùng hàm if để xét "đậu", "rớt"
-	Bước 6: in kết quả luongNV ra màn hình
- 
- Khối 3:
- In kết quả luongNV
*/
const scoreEl = document.getElementById('score')

scoreEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const math = +document.getElementById('math').value;
    const physis = +document.getElementById('physis').value;
    const chemistry = +document.getElementById('chemistry').value;
    const khuVuc = +document.getElementById('khuVuc').value;
    const doiTuong = +document.getElementById('doiTuong').value;       

    const totalScore = Math.floor((math + physis + chemistry) / 3) + khuVuc + doiTuong;
    let rankk;
    
    if (totalScore >= 8) {
        rankk = "Đậu";    
    } else {
        rankk = "Rớt";
    }

    const wrapperrEl = document.getElementById('score-wrapperr');    
    const totalScoreEl = document.getElementById('totalScoreEl');
    const rankkEl = document.getElementById('rankkEl');

    wrapperrEl.style.display = "block";
    totalScoreEl.innerHTML = totalScore.toLocaleString();
    rankkEl.innerHTML = rankk;
}


// Bài 2: Tính tiền điện
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào tên, Số kw

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo biến cho kw_dau, kw_ke_1, kw_ke_2, kw_ke_3, kw_conlai, price
-	Bước 3: Gán giá trị cho kw_dau, kw_ke_1, kw_ke_2, kw_ke_3, kw_conlai
-	Bước 4: dùng hàm if để tính price
-	Bước 5: in kết quả stqd ra màn hình
-	 
- Khối 3:
- In kết quả Số tiền quy đổi
*/
const quyDoiEl = document.getElementById('quyDoi')
const kw_dau = 500;
const kw_ke_1 = 650;
const kw_ke_2 = 850;
const kw_ke_3 = 1100;
const kw_conlai = 1300;

quyDoiEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const tenUser = document.getElementById('tenUser').value;
    const soKw = +document.getElementById('soKw').value;    

    let price = 0;    
	if (soKw <= 50) {
        price += soKw * kw_dau;
    } else if (soKw <= 100) {
        price += soKw * kw_ke_1;
    } else if (soKw <= 200) {
        price += soKw * kw_ke_2;
    } else if (soKw <= 350) {
        price += soKw * kw_ke_3;
    } else {
        price += soKw * kw_conlai;
    }

    const wrapperEl = document.getElementById('price-wrapper');
    const tenUserEl = document.getElementById('tenUserEl');
    const priceEl = document.getElementById('priceEl');


    wrapperEl.style.display = "block";
    tenUserEl.innerHTML = tenUser;
    priceEl.innerHTML = price.toLocaleString();
}




