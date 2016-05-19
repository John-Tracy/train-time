
var url = 'https://r-p-s-game.firebaseio.com/';
var dataRef = new Firebase(url);

var trainName = '';
var destination = '';
var frequency = 0;
var uTc = '';



$('#infoSubmit').on('click', function(){

		trainName = $('#name').val().trim();
		destination = $('#destination').val().trim();
		frequency = $('#freq').val().trim();
		uTc = $('#time').val().trim();

		dataRef.push({
			name: trainName,
			place: destination,
			frequency: frequency,
			militaryTime: uTc
		});

		$('#name').val('');
		$('#destination').val('');
		$('#freq').val('');
		$('#time').val('');

		return false;

});

dataRef.on('child_added', function(childSnapshot){

//		console.log(childSnapshot.val().name);
//		console.log(childSnapshot.val().place);
//		console.log(childSnapshot.val().frequency);
//		console.log(childSnapshot.val().militaryTime);

		var table = $('#appendTable');
		var row = $('<tr>');

		row.append('<td>' + childSnapshot.val().name + '</td>');
		row.append('<td>' + childSnapshot.val().place + '</td>');
		row.append('<td>' + childSnapshot.val().frequency + '</td>');
		table.append(row)

}, function (errorObject){
	console.log('There was an error retrieving data');
});







