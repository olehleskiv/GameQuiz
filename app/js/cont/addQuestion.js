
define(['jquery'], function($) { 


	var submitButton = document.getElementById('sendQuestions');			// get form

	submitButton.onclick = function () {								//action on submiy button

		$(".errorBlock").remove();										//remove error block(if exists)

		var title = this.form.question.value,							//getting values from the form
			code = this.form.mycode.value,
			var1 = this.form.answer1.value,
			var2 = this.form.answer2.value,
			var3 = this.form.answer3.value,
			var4 = this.form.answer4.value,
			var5 = this.form.answer5.value,
			correct = this.form.correct.value,
			category = this.form.category.value;

			title = title + "<pre>" + code + "</pre>";
			//
			// All fields in form are required
			//
			if(title === "") {										
				message("please enter question title", true);
			} else 
			if(var1 === "" || var2 === "") {
				message("please enter minimum 2  anwser variants", true);
			} else
			if(correct === "") {
				message("please choose correct answer", true);
			} else
			if(category === "") {
				message("please choose category", true);
			} else {
				send([title, var1, var2, var3, var4, var5, correct, category]);		//if no errors - send
			}
	};

	function send(params){  				//send to php function

		var title = params[0],				//forming parameters
			var1  = params[1],
			var2  = params[2],
			var3  = params[3],
			var4  = params[4],
			var5  = params[5],
			correct = params[6],
			category = params[7];

		       $.ajax({										//ajax send to php
		                type: "POST",
		                url: "php/add_question.php",		//php file on server
		                data:   "title="+title+				//data transferred
				         		"&var1="+var1+
				         		"&var2="+var2+
				         		"&var3="+var3+
				         		"&var4="+var4+
				         		"&var5="+var5+
				         		"&correct="+correct+
				         		"&category="+category,

		         		success: function(html) {			//if sent successfully
		         			changeButtons();
		         			return message(html, false);
		         		},
		         		error : function(html) {			//if something went wrong

		         			return message("something went wrong", true);
		         		}
		        });
	}
	
	function message(message, error) {						//function creates block with information
															//about successfull or unsuccessfull actions
															//if param "error" = true - it's an error

		var mainAddQuestionDude = document.getElementById('resultMessageDude');
		var block = document.getElementById('errorBlock');

		var logo = document.createElement('span');
		if(error) {
			logo.setAttribute("class","mesError");
		} else {
			logo.setAttribute("class","mesSuccess");
		}

		
		block.innerHTML = message;
		block.appendChild(logo);
		mainAddQuestionDude.appendChild(block);
	}

	function changeButtons() {											//function hides submit button
																		//and shows add new button, and visa versa
																		//on add new click form clears
		var mainAddQuestionForm = document.getElementById('addQuestion');
		$("#sendQuestions").hide(); 
		var postNewDiv = document.createElement('div');
		var postNew = document.createElement('button');
		postNew.setAttribute("class","btn btn-primary resetForm");
		postNew.setAttribute("type","button");
		postNew.onclick = function() {
			$(".input-group input:radio").attr('disabled',true);			//disable all radio buttons
			$(".errorBlock").remove();										//remove error block(if exists)
			mainAddQuestionForm.reset();									//reset the form
			$(".resetForm").hide();
			$("#sendQuestions").show();
		};
		postNew.innerHTML = "Post new one";
		postNewDiv.appendChild(postNew);
		mainAddQuestionForm.appendChild(postNewDiv);
	}

});