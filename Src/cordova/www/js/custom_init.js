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
	6, 1, 7, 5);

var fengshui_data_cungphi_ly = new Array(
	"Ly.png",
	2, 3, 0, 4, 
	1, 6, 5, 7);
	
var fengshui_data_cungphi_cans = new Array(
	"Cans.png",
	5, 7, 6, 1, 
	4, 0, 2, 3);
	
var fengshui_data_cungphi_doai = new Array(
	"Doai.png",
	7, 5, 1, 6, 
	0, 4, 3, 2);
	
var fengshui_data_cungphi_can = new Array(
	"Can.png",
	6, 1, 5, 7, 
	3, 2, 0, 4);
	
var fengshui_data_cungphi_khon = new Array(
	"Khon.png",
	1, 6, 7, 5, 
	2, 3, 4, 0);
	
var fengshui_data_cungphi_ton = new Array(
	"Ton.png", 
	0, 4, 2, 3, 
	7, 5, 6, 1);
	
var fengshui_data_cungphi_chan = new Array(
	"Chan.png",
	4, 0, 3, 2, 
	5, 7, 1, 6);

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
