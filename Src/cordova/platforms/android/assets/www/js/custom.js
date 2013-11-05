/**
 * @author Thuc
 */

/* Jquery Mobile config */
$.mobile.pageContainer = $('#container');
$.mobile.defaultDialogTransition = "none";
$.mobile.defaultPageTransition = "none";


/* Phone Gap */
var database;
var watchID = null;
var currentHeading = null;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
}

/* HomeScreen */
jQuery( "#home" ).on( "pagebeforecreate", function( event ) {
	load_age();

	var age = window.localStorage.getItem(fengshui_column_age);
	var sex = window.localStorage.getItem(fengshui_column_sex);
	
	if( age != null ) {
		jQuery("#year-of-birth").val( age );
	}

	if( sex == "true" ) {
		jQuery("#sex-female").removeAttr('checked');
		jQuery("#sex-male").attr('checked', 'checked' );		
	} else {
		jQuery("#sex-male").removeAttr('checked');
		jQuery("#sex-female").attr('checked', 'checked' );

	}
});

jQuery( "#submit_home" ).on( "tap", function( event ) {
	var age = jQuery("#year-of-birth").val();
	var sex_male = jQuery("#sex-male").attr('checked');
	
	window.localStorage.setItem(fengshui_column_age, age);
	if( sex_male == null || sex_male === undefined ) {
		window.localStorage.setItem(fengshui_column_sex, "false");
	} else {
		window.localStorage.setItem(fengshui_column_sex, "true");
	}
} );

function load_age() {
	for(i = 1920; i < 2000; i++){
		$('<option>').val(i).text(i).appendTo('#year-of-birth');
	} 
}

/* Trigrams */
jQuery( "#trigrams" ).on( "pagebeforeshow", function( event ) {
	var age = window.localStorage.getItem(fengshui_column_age);
	var sex = window.localStorage.getItem(fengshui_column_sex);

	var trigram;
	var index = age % 9;
	if( sex == "true" ) {
		trigram = fengshui_data_cungphi_male[index];
	} else {
		trigram = fengshui_data_cungphi_female[index];
	}

	var imageMargin = ( jQuery(document).height() / 2 ) - ( jQuery(document).width() / 2 ) - 7;
	jQuery("#trigrams-image").attr("src", "images/trigrams/" + trigram[0])
				 .css('-webkit-transform', 'rotate(70deg)')
				 .css('-moz-transform', 'rotate(70deg)')
			   	 .css('-ms-transform', 'rotate(70deg)')
			   	 .css('-o-transform', 'rotate(70deg)')
			   	 .css('transform', 'rotate(70deg)')
				 .css('margin-top', imageMargin);
	startWatch();
});

function startWatch() {

	var options = { frequency: 500 };

	watchID = navigator.compass.watchHeading(function(heading) {

		if( currentHeading - heading.magneticHeading > 270 ) {
			
			jQuery("#trigrams-image").css('-webkit-transform', 'rotate(' + heading.magneticHeading + 360 + 'deg)')
								 	 .css('-moz-transform', 'rotate(' + heading.magneticHeading + 360 + 'deg)')
							   	 	 .css('-ms-transform', 'rotate(' + heading.magneticHeading + 360 + 'deg)')
							   	 	 .css('-o-transform', 'rotate(' + heading.magneticHeading + 360 + 'deg)')
							   	 	 .css('transform', 'rotate(' + heading.magneticHeading + 360 + 'deg)');
			
			var transitionTemp = jQuery("#trigrams-image").css('transition');
			jQuery("#trigrams-image").css('transition', 'all 0 ease 0')
						 			 .css('-webkit-transition', 'all 0 ease 0');

			jQuery("#trigrams-image").css('-webkit-transform', 'rotate(' + heading.magneticHeading + 'deg)')
								 	 .css('-moz-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('-ms-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('-o-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('transform', 'rotate(' + heading.magneticHeading + 'deg)');

			jQuery("#trigrams-image").css('transition', transitionTemp)
						 			 .css('-webkit-transition', transitionTemp);
			

		} else {

			jQuery("#trigrams-image").css('-webkit-transform', 'rotate(' + heading.magneticHeading + 'deg)')
								 	 .css('-moz-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('-ms-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('-o-transform', 'rotate(' + heading.magneticHeading + 'deg)')
							   	 	 .css('transform', 'rotate(' + heading.magneticHeading + 'deg)');
		}

		currentHeading = heading.magneticHeading;

	}, function(compassError) {	}, options);
}

function stopWatch() {
	if (watchID) {
		navigator.compass.clearWatch(watchID);
		watchID = null;
	}
}

jQuery( "#trigrams" ).on( "pagebeforehide", function( event ) {
	stopWatch();
});


/* Results */
jQuery( "#results" ).on( "pagebeforeshow", function( event ) {
	var direction = Math.floor( ( currentHeading + 22.5 ) * 8 / 360 );
	var age = window.localStorage.getItem(fengshui_column_age);
	var sex = window.localStorage.getItem(fengshui_column_sex);

	var trigram = null;
	var index = age % 9;
	if( sex == "true" ) {
		trigram = fengshui_data_cungphi_male[index];
	} else {
		trigram = fengshui_data_cungphi_female[index];
	}
	
	jQuery( "#result_age" ).html(age);
	jQuery( "#result_huongtot" ).html(getGoodDirection(trigram));
	
	jQuery( "#result_sinhkhi" ).html( getDirectionName(trigram[1]) );
	jQuery( "#result_thieny" ).html( getDirectionName(trigram[2]) );
	jQuery( "#result_diennien" ).html( getDirectionName(trigram[3]) );
	jQuery( "#result_phucvi" ).html( getDirectionName(trigram[4]) );
	
	jQuery( "#result_hoahai" ).html( getDirectionName(trigram[5]) );
	jQuery( "#result_nguquy" ).html( getDirectionName(trigram[6]) );
	jQuery( "#result_lucsat" ).html( getDirectionName(trigram[7]) );
	jQuery( "#result_tuyetmenh" ).html( getDirectionName(trigram[8]) );
	
	setChoiceDirection(direction, trigram)
});

function setChoiceDirection(direction, trigram) {
	jQuery( "#result_choiceDirection_name" ).html( getDirectionName(direction) );
	var choiceDirection_des = "";
	
	for(i = 1; i < 9; i++) {
		if(trigram[i] == direction) {
			switch(i)
			{
				case 1:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_sinhkhi );
				  break;
				case 2:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_sinhkhi );
				  return fengshui_thieny;
				  break;
				case 3:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_diennien );
				  break;
				case 4:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_phucvi );
				  break;
				case 5:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_hoahai );
				  break;
				case 6:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_nguquy );
				  break;
				case 7:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_lucsat );
				  break;
				case 8:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_tuyetmenh );
				  break;
				default:
				  jQuery( "#result_choiceDirection_des" ).html( fengshui_sinhkhi );
			}
		}
	}
}

function getGoodDirection(trigram) {
	if(trigram.length > 4) {
		return getDirectionName(trigram[1]) + ", " + getDirectionName(trigram[2]) + ", " + getDirectionName(trigram[3]) + ", " + getDirectionName(trigram[4]);
	}
	return "";
}

function getDirectionName (directionId) {
	/*
	 * var fengshui_north = 0; //bac
		var fengshui_northeast = 1; //dong bac
		var fengshui_east = 2; //dong
		var fengshui_southeast = 3; //dong nam
		var fengshui_south = 4; //nam
		var fengshui_southwest = 5; //tay nam
		var fengshui_west = 6; //tay
		var fengshui_northwest = 7; //tay bac
	 */
	
	switch(directionId)
	{
		case fengshui_north:
		  return "Bắc"
		  break;
		case fengshui_northeast:
		  return "Đông Bắc"
		  break;
		case fengshui_east:
		  return "Đông"
		  break;
		case fengshui_southeast:
		  return "Đông Nam"
		  break;
		case fengshui_south:
		  return "Nam"
		  break;
		case fengshui_southwest:
		  return "Tây Nam"
		  break;
		case fengshui_west:
		  return "Tây"
		  break;
		case fengshui_northwest:
		  return "Tây Bắc"
		  break;
		default:
		  	return "Bắc";
	}
}