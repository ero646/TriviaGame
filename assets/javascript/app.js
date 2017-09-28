
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var timeLeft = 60;


$(document).ready(function(){


	$("#mid_game_container").hide();
	$("#end_container").hide();

	
	window.scrollTo(0, 500);


	$("#start_button").on("click", function(){
		alert("When you play the Game of Trivia, you either win or you lose. There is no middle ground. Choose carefully.")
		$("#start_container").hide();
		$("#mid_game_container").show();

		startCountdown();
		return;

function countdown(){
		timeLeft--;

    	$('#timer_number').html(timeLeft + " Seconds");
			$("#done_button").on("click", function(){
			timeLeft = 0; 
			return;
			});

			if(timeLeft == -1){
				timeUp();
				$("#mid_game_container").hide();
			}
	}

	function startCountdown(){

		setInterval(countdown, 1000);

	}

	function timeUp(){
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
	

		if(Q1 == undefined){
			unAnswered++;
		}
		else if(Q1 == "Vhagar"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}

		if(Q2 == undefined){
			unAnswered++;
		}
		else if(Q2 == "Hear me roar"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}


		if(Q3 == undefined){
			unAnswered++;
		}
		else if(Q3 == "Rheagal"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}


		if(Q4 == undefined){
			unAnswered++;
		}
		else if(Q4 == "The Old Gods"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}


		if(Q5 == undefined){
			unAnswered++;
		}
		else if(Q5 == "Tywin Lannister"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}


		$('#correct_answers').html(correctAnswers);
		$('#wrong_answers').html(incorrectAnswers);
		$('#unanswered').html(unAnswered);
		$("#end_container").show();


		window.scrollTo(0, 550);

	}

});


	});
