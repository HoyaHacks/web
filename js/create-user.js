$(function() {
  Parse.initialize("X1NGGfUhjOod4VtVMKE9WHqtD15b894Z2cizubz0", "Q6CwqIpilFIepvfRgSZ5zJAhTs0m4KOiY3Z5MkZQ");

  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
    testObject.save({foo: "bar"}, {
    success: function(object) {
      $(".success").show();
    },
    error: function(model, error) {
      $(".error").show();
    }
  });
});
