// SET UP THE FORM SCRIPT

 function submitOnclick() {
	    var name = document.getElementById("name").value;
        var lname = document.getElementById("lname").value;
	    var email = document.getElementById("email").value;
//	    var questions = document.getElementById("questions").value;
     
	    console.log(name, lname, email);
     
	    var message = document.getElementById("message");
	    message.innerHTML = "Hello " + name + " " + lname + " from " + email + ", welcome to my website.";
    };
