/* database column */
var fengshui_column_age = "age";
var fengshui_column_sex = "sex";
var fengshui_column_direction = "direction";


/* static data column */
var fengshui_male = 1;
var fengshui_female = 0;

var fengshui_north = 0; //bac
var fengshui_northeast = 1; //dong bac
var fengshui_east = 2; //dong
var fengshui_southeast = 3; //dong nam
var fengshui_south = 4; //nam
var fengshui_southwest = 5; //tay nam
var fengshui_west = 6; //tay
var fengshui_northwest = 7; //tay bac

var fengshui_sinhkhi = "[Sinh Khí :: Sự dồi dào, hạnh phúc] Hướng cửa chính, các phòng quan trọng, hướng kê đầu giường.";
var fengshui_thieny = "[Thiên Y :: Sức khỏe] Hướng phòng ngủ, kê đầu gường khi ốm.";
var fengshui_diennien = "[Diên Niên :: Sự hòa hợp] Vị trí tốt nhất cho phòng sinh hoạt chung.";
var fengshui_phucvi = "[Phục vị :: Cá nhân] Vị trí này hỗ trợ cho hoạt động suy nghĩ và nhận thức, chính là nơi đặt phòng làm việc.";
var fengshui_hoahai = "[Hoạ Hại :: Bất hạnh] Ở nơi này mọi việc diễn biến không như dự định, phòng học không nên đặt ở đây.";
var fengshui_nguquy = "[Ngũ Quỷ :: Tranh cải] Nơi cấm kỵ của phòng sinh hoạt chung.";
var fengshui_lucsat = "[Lục Sát :: Luật pháp & Sức khỏe] Các phòng chính tránh đặt vị trí này.";
var fengshui_tuyetmenh = "[Tuyệt Mệnh :: Thảm họa] Hãy tránh hướng này, tại đây chỉ nên đặt nhà kho và nhà vệ sinh.";

var fengshui_data_cungphi_kham = new Array(
	"Kham.png", 
	3, 2, 4, 0, 
	6, 1, 7, 5,
	"Đông tứ mệnh");

var fengshui_data_cungphi_ly = new Array(
	"Ly.png",
	2, 3, 0, 4, 
	1, 6, 5, 7,
	"Đông tứ mệnh");
	
var fengshui_data_cungphi_cans = new Array(
	"Cans.png",
	5, 7, 6, 1, 
	4, 0, 2, 3,
	"Tây tứ mệnh");
	
var fengshui_data_cungphi_doai = new Array(
	"Doai.png",
	7, 5, 1, 6, 
	0, 4, 3, 2,
	"Tây tứ mệnh");
	
var fengshui_data_cungphi_can = new Array(
	"Can.png",
	6, 1, 5, 7, 
	3, 2, 0, 4,
	"Tây tứ mệnh");
	
var fengshui_data_cungphi_khon = new Array(
	"Khon.png",
	1, 6, 7, 5, 
	2, 3, 4, 0,
	"Tây tứ mệnh");
	
var fengshui_data_cungphi_ton = new Array(
	"Ton.png", 
	0, 4, 2, 3, 
	7, 5, 6, 1,
	"Đông tứ mệnh");
	
var fengshui_data_cungphi_chan = new Array(
	"Chan.png",
	4, 0, 3, 2, 
	5, 7, 1, 6,
	"Đông tứ mệnh");

var fengshui_data_cungphi_male = new Array(
	fengshui_data_cungphi_khon, //0
	fengshui_data_cungphi_kham, //1
	fengshui_data_cungphi_ly, //2
	fengshui_data_cungphi_cans, //3
	fengshui_data_cungphi_doai, //4
	fengshui_data_cungphi_can, //5
	fengshui_data_cungphi_khon, //6
	fengshui_data_cungphi_ton, //7
	fengshui_data_cungphi_chan //8
);

var fengshui_data_cungphi_female = new Array(
	fengshui_data_cungphi_ton, //0	
	fengshui_data_cungphi_cans, //1	
	fengshui_data_cungphi_can, //2
	fengshui_data_cungphi_doai, //3
	fengshui_data_cungphi_cans, //4	
	fengshui_data_cungphi_ly, //5
	fengshui_data_cungphi_kham, //6
	fengshui_data_cungphi_khon, //7
	fengshui_data_cungphi_chan //8
);

var fengshui_menhcung = new Array(
	new Array("1930", "Canh ngọ", "Lộ Bàng Thổ", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1931", "Tân mùi", "Lộ Bàng Thổ", "Càn - Kim", "Ly - Hỏa"),
	new Array("1932", "Nhâm Thân", "Kiếm Phong Kim", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1933", "Quý Dậu", "Kiếm Phong Kim", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1934", "Giáp Tuất", "Sơn Đầu Hỏa", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1935", "Ất Hợi", "Sơn Đầu Hỏa", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1936", "Bính Tý", "Giang Hạ Thủy", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1937", "Đinh Sửu", "Giang Hạ Thủy", "Ly - Hỏa", "Càn - kim"),
	new Array("1938", "Mậu Dần", "Thành Đầu Thổ", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1939", "Kỷ Mão", "Thành Đầu Thổ", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1940", "Canh Thìn", "Bạch Lạp Kim", "Càn - Kim", "Ly - Hỏa"),
	new Array("1941", "Tân Tỵ", "Bạch Lạp Kim", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1942", "Nhâm Ngọ", "Dương Liễu Mộc", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1943", "Quý Mùi", "Dương Liễu Mộc", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1944", "Giáp Thân", "Tuyền Trung Thủy", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1945", "Ất Dậu", "Tuyền Trung Thủy", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1946", "Bính Tuất", "Ốc Thượng Thổ", "Ly - Hỏa", "Càn - kim"),
	new Array("1947", "Đinh Hợi", "Ốc Thượng Thổ", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1948", "Mậu Tý", "Thích Lịch Hỏa", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1949", "Kỷ Sửu", "Thích Lịch Hỏa", "Càn - Kim", "Ly - Hỏa"),
	new Array("1950", "Canh Dần", "Tòng Bá Mộc", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1951", "Tân Mão", "Tòng Bá Mộc", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1952", "Nhâm Thìn", "Trường Lưu Thủy", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1953", "Quý Tỵ", "Trường Lưu Thủy", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1954", "Giáp Ngọ", "Sa Trung Kim", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1955", "Ất Mùi", "Sa Trung Kim", "Ly - Hỏa", "Càn - kim"),
	new Array("1956", "Bính Thân", "Sơn Hạ Hỏa", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1957", "Đinh Dậu", "Sơn Hạ Hỏa", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1958", "Mậu Tuất", "Bình Địa Mộc", "Càn - Kim", "Ly - Hỏa"),
	new Array("1959", "Kỷ Hợi", "Bình Địa Mộc", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1960", "Canh Tý", "Bích Thượng Thổ", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1961", "Tân Sửu", "Bích Thượng Thổ", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1962", "Nhâm Dần", "Kim Bạch Kim", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1963", "Quý Mão", "Kim Bạch Kim", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1964", "Giáp Thìn", "Phúc Đăng Hỏa", "Ly - Hỏa", "Càn - kim"),
	new Array("1965", "Ất Tỵ", "Phúc Đăng Hỏa", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1966", "Bính Ngọ", "Thiên Hà Thủy", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1967", "Đinh Mùi", "Thiên Hà Thủy", "Càn - Kim", "Ly - Hỏa"),
	new Array("1968", "Mậu Thân", "Đại Trạch Thổ", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1969", "Kỷ Dậu", "Đại Trạch Thổ", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1970", "Canh Tuất", "Thoa Xuyến Kim", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1971", "Tân Hợi", "Thoa Xuyến Kim", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1972", "Nhâm tý", "Tang Đố Mộc", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1973", "Quý Sửu", "Tang Đố Mộc", "Ly - Hỏa", "Càn - kim"),
	new Array("1974", "Giáp Dần", "Đại Khê Thủy", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1975", "Ất Mão", "Đại Khê Thủy", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1976", "Bính Thìn", "Sa Trung Thổ", "Càn - Kim", "Ly - Hỏa"),
	new Array("1977", "Đinh Tỵ", "Sa Trung Thổ", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1978", "Mậu Ngọ", "Thiên Thượng Hỏa", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1979", "Kỷ Mùi", "Thiên Thượng Hỏa", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1980", "Canh Thân", "Thạch Lựu Mộc", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1981", "Tân Dậu", "Thạch Lựu Mộc", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1982", "Nhâm Tuất", "Đại Hải Thủy", "Ly - Hỏa", "Càn - kim"),
	new Array("1983", "Quý Hợi", "Đại Hải Thủy", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1984", "Giáp Tý", "Hải Trung Kim", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1985", "Ất Sửu", "Hải Trung Kim", "Càn - Kim", "Ly - Hỏa"),
	new Array("1986", "Bính Dần", "Lư Trung Hỏa", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1987", "Đinh Mão", "Lư Trung Hỏa", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1988", "Mậu Thìn", "Đại Lâm Mộc", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1989", "Kỷ Tỵ", "Đại Lâm Mộc", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1990", "Canh Ngọ", "Lộ Bàng Thổ", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("1991", "Tân Mùi", "Lộ Bàng Thổ", "Ly - Hỏa", "Càn - kim"),
	new Array("1992", "Nhâm Thân", "Kiếm Phong Kim", "Cấn - Thổ", "Đoài - Kim"),
	new Array("1993", "Quý Dậu", "Kiếm Phong Kim", "Đoài - Kim", "Cấn - Thổ"),
	new Array("1994", "Giáp Tuất", "Sơn Đầu Hỏa", "Càn - Kim", "Ly - Hỏa"),
	new Array("1995", "Ất Hợi", "Sơn Đầu Hỏa", "Khôn - Thổ", "Khảm - Thủy"),
	new Array("1996", "Bính Tý", "Giang Hạ Thủy", "Tốn - Mộc", "Khôn - Thổ"),
	new Array("1997", "Đinh Sửu", "Giang Hạ Thủy", "Chấn - Mộc", "Chấn - Mộc"),
	new Array("1998", "Mậu Dần", "Thành Đầu Thổ", "Khôn - Thổ", "Tốn - Mộc"),
	new Array("1999", "Kỷ Mão", "Thành Đầu Thổ", "Khảm - Thủy", "Cấn - Thổ"),
	new Array("2000", "Canh Thìn", "Bạch Lạp Kim", "Ly - Hỏa", "Càn - kim")
);
