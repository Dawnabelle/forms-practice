$(function() {
  $("#formOne").submit(function() {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var streetAddress = $("input#streetAddress").val();
    var cityStateZip = $("input#cityStateZip").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".cityStateZip").text(cityStateZip);

    $("#letter").show();

    event.preventDefault();
  });

});
