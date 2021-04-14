$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const fullName = $("input#fullName").val();
    const address = $("input#address").val();
    const drinks = $("#drinks").val();
    const dish = $("#dish").val();
    const fruit = $("#fruit").val();

    $(".fullName").text(fullName);
    $(".address").text(address);
    $(".drinks").text(drinks);
    $(".dish").text(dish);
    $(".fruit").text(fruit);

    $("#receipt").show();
  });
});