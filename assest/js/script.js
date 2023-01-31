
const form = document.getElementById("contact-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.sendForm("service_3ribd77", "template_cfa5jqf", this)
          .then(function() {
            console.log("SUCCESS!");
            alert("Thanks for your message!...I will get back to you as soon as possible!");
        }
        , function(err) {
          console.log("FAILED...", err);
          alert("Ops...Looks like something went wrong!", err);
      }
      );
    });
