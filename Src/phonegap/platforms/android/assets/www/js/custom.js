/**
 * @author Thuc
 */

$.mobile.pageContainer = $('#container');
$.mobile.defaultDialogTransition = "none";
$.mobile.defaultPageTransition = "none";
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	navigator.splashscreen.show();
}
