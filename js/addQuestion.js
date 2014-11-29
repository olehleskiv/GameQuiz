
(function() {

	var submitButton = document.getElementById('sendQuestions')

	submitButton.onclick = function () {

		$(".errorBlock").remove();

		var title = this.form.question.value,
			var1 = this.form.answer1.value,
			var2 = this.form.answer2.value,
			var3 = this.form.answer3.value,
			var4 = this.form.answer4.value,
			var5 = this.form.answer5.value,
			correct = this.form.correct.value;
			category = this.form.category.value;

			if(title == "") {
				error("please enter question title");
			} else 
			if(var1 == "" || var2 == "" || var3 == "" || var4 == "" || var5 == "") {
				error("please enter all anwser variants");
			} else
			if(correct == "") {
				error("please enter correct answer");
			} else
			if(category == "") {
				error("please choose category");
			} else {
				send([title, var1, var2, var3, var4, var5, correct, category])
			}
	}

	function send(params){

		var title = params[0],
			var1  = params[1],
			var2  = params[2],
			var3  = params[3],
			var4  = params[4],
			var5  = params[5],
			correct = params[6],
			category = params[7];

		  // и отправляю
		       $.ajax({
		                type: "POST",
		                url: "/php/add_question.php",
		                data: { 
		                		title: "title="+title,
				         		var1:  "var1="+var1,
				         		var2:  "var2="+var2,
				         		var3:  "var3="+var3,
				         		var4:  "var4="+var4,
				         		var5:  "var1="+var5,
				         		correct: "correct="+correct,
				         		category: "category="+category
		         		},
		         		success:function() {
		         			alert("sent!")
		         		}
		        });
	}
	function error(message) {
		var mainAddQuestionForm = document.getElementById('addQuestion')
		var block = document.createElement('div');
		block.setAttribute("class","alert alert-danger errorBlock");

		logo = document.createElement('span');
		logo.setAttribute("class","glyphicon glyphicon-exclamation-sign");
		logo.setAttribute("aria-hidden","true");

		block.appendChild(logo);
		block.innerHTML = message;
		mainAddQuestionForm.insertBefore(block, mainAddQuestionForm.getElementsByTagName('div')[0]
)
	}

})();