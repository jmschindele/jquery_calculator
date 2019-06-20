//on click, store first numbers value
let input1 = "";
let operator = "";
let input2 = "";

$(".btn").on("click", function() {
  if (operator === "") {
    if (
      $(this).text() !== "=" &&
      $(this).text() !== "*" &&
      $(this).text() !== "+" &&
      $(this).text() !== "-" &&
      $(this).text() !== "/" &&
      $(this).text() !== "AC" &&
      $(this).text() !== "+/-" &&
      $(this).text() !== "%" 
    ) {
      input1 = input1 + $(this).text();
      $("#display").text(input1);
      $('#clear').text('C')
    } else if ($(this).text() !== '=' && input1 !== "")
    {
      operator = $(this).text();
      $(this).addClass('selected')
      $("#display").text(input1);
    }
    return input1;
  } else {
    if (
        $(this).text() !== "=" &&
        $(this).text() !== "*" &&
        $(this).text() !== "+" &&
        $(this).text() !== "-" &&
        $(this).text() !== "/" &&
        $(this).text() !== "AC" &&
        $(this).text() !== "+/-" &&
        $(this).text() !== "%" 
    ) {
      input2 = input2 + $(this).text();
      $("#display").text(input2);
    } else {
    }
    return input2;
  }
});

$("#solve").on("click", function() {
    if (input2 !== ""){
  let num1 = parseFloat(input1);
  let num2 = parseFloat(input2);

  switch (operator) {
    case (operator = "+"):
      ans = num1 + num2;
      $("#display").text(ans);
      break;

    case (operator = "-"):
      ans = num1 - num2;
      $("#display").text(ans);
      break;

    case (operator = "*"):
      ans = num1 * num2;
      $("#display").text(ans);
      break;

    case (operator = "/"):
      ans = num1 / num2;
      $("#display").text(ans);
      break;

    default:
      break;
  }

  input1 = '';
  input2 = '';
  operator ='';
  $('.btn').removeClass('selected')
}});


$('#clear').on('click', function(){
    input1 = '';
    input2 = '';
    operator ='';
    $('#display').text('0')
    $('#clear').text('AC')
})
//update display to show number clicked
//if next button is an operator, store operator. else, append to number.
//after operator is selected, begin building second number.
//second click store operator
//third click store third value and perform calculation.
