var url = 'https://r-p-s-game.firebaseio.com/';

var dataRef = new Firebase(url);

	var addTrain = function(){
	

		var trainName = $('#name').val().trim();
		var destination = $('#destination').val().trim();
		var frequency = $('#freq').val().trim();
		var uTc = $('#time').val().trim();

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
	};



$('#infoSubmit').on('click', addTrain());

dataRef.on('child_added', function(childSnapshot){

		console.log(childSnapshot.val().name);
		console.log(childSnapshot.val().place);
		console.log(childSnapshot.val().frequency);
		console.log(childSnapshot.val().militaryTime);

}, function (errorObject){

});







