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
      success("Subscribed!");
    },
    error: function(model, error) {
      error("Something went wrong. Please try again!");
    }
  });
}

function flash(m) {
  // finding our messagebox
  var $msgBox =  $( 'html #messages' );

  // set text & fade it in
  $msgBox.append(m);
}

function success(m) {
  flash('<div class="success">' + m + '</div>');
}

function error(m) {
  flash('<div class="error">' + m + '</div>');
}
