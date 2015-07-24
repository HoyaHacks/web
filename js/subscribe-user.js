$(function() {
  Parse.initialize("X1NGGfUhjOod4VtVMKE9WHqtD15b894Z2cizubz0", "Q6CwqIpilFIepvfRgSZ5zJAhTs0m4KOiY3Z5MkZQ");

  $('#subscribe-me').click( subscribeUser );
});

function subscribeUser(e) {
  e.preventDefault();
  userEmail = $('#subscriber-email').val();

  var Subscription = Parse.Object.extend("Subscription");
  var subscription = new Subscription();
  subscription.save({email: userEmail}, {
    success: function(object) {
      $(".success").show();
      console.log(userEmail);
    },
    error: function(model, error) {
      $(".error").show();
      console.log(userEmail);
    }
  });
}