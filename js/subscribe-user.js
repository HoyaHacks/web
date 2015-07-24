$(function() {
  Parse.initialize("X1NGGfUhjOod4VtVMKE9WHqtD15b894Z2cizubz0", "Q6CwqIpilFIepvfRgSZ5zJAhTs0m4KOiY3Z5MkZQ");

  $('#subscribe-me').click( subscribeUser );
});

function subscribeUser() {
  userEmail = $('#subscriber-email').val();

  // if isValidEmail(userEmail) {
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
  // }
}

function isValidEmail(e) {
  at = e.split('@')
  if (at.length < 2) { return false; }

  domain = at[1].split('.');
  if (domain[domain.length-1] != edu) { return false; }

  return true;
}