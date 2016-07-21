(function() {
        mixpanel.track("Page Load", {"Basic page load": true});
        $('#emailForm').submit(function() {
            mixpanel.track("Email button clicked", {"Success" : false});
            postToGoogle();
            var email = this[0].value
            mixpanel.track("Email submitted", {"Success" : true, "$email" : email});
            mixpanel.identify(email);
            mixpanel.people.set({"$email":email});
            $('#formContainer').html('<h3>Thank you!</h3>');
            return false;
        });
        var target_date = new Date("Aug 30, 2016").getTime();
         
        var days, hours, minutes, seconds, countdown = document.getElementById("countdown");
         
        setInterval(function () {
         
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
         
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
             
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
             
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
            
            countdown.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";  
         
        }, 1000);
})();

function postToGoogle() {

   var txtEmailVal = $('#txtEmail').val();
   
   $.ajax({
      url: "https://docs.google.com/forms/d/1St-6wN5okhONOEZGN2qvHtiwyZwWSsHMvQ5piM0Sp1M/formResponse",
      data: {"entry.646964978": txtEmailVal},
      type: "POST",
      dataType: "xml",
      statusCode: {
          0: function() {
          },
          200: function() {
          }
      }
   });
}
