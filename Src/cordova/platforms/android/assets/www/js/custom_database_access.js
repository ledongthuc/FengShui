function get_database() {
	var fengshui_database = window.openDatabase(fengshui_database_name, fengshui_database_version, fengshui_database_dislay_name, fengshui_database_size);
	
	init_database_structure(fengshui_database);

	return fengshui_database;
}

function init_database_structure(tx) {
	fengshui_database.transaction(init_database_structure, errorCB, successCB);
}

function init_table_user_data(tx) {
	tx.executeSql('CREATE TABLE user_data (id unique, data)');
	tx.executeSql('INSERT INTO user_data (id, data) VALUES ("age", "1992")');
	tx.executeSql('INSERT INTO user_data (id, data) VALUES ("sex", ' + fengshui_male + ')');
}

function get_user_data(tx) {
	tx.executeSql('SELECT * FROM user_data', [], fill_data_to_form, errorCB);
}

function errorCB(err) {
	alert(err.code);
	alert(err.message);
}

function successCB() {
	alert("Success");
}

