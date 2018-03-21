$(function() {
// Goes to tag with attribute id formOne, tells it to run the submit function when button with attribute type submit is clicked
  $("#formOne").submit( function() {
// Define variable output = the value of the input tag with attribute id shout and convert to uppercase
    var output = $("input#shout").val().toUpperCase();
// Find html element with class shout and insert text from var output
    $(".shout").text(output);
// Find html element with id output and show content the #output is initially set to display: none;
    $("#output").show();
// Ignores submit event's default so the output does not disappear    
    event.preventDefault();
  });
});
