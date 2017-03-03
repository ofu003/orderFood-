function Pizza(inputSize, inputToppings){
  this.Size = inputSize;
  this.Toppings = inputToppings;
}

Pizza.prototype.fullDetails = function(){
  return "You ordered a " + this.Size + "pizza with the following toppings" + this.Toppings;
}


$(function(){
  $("form#form").submit(function(event) {
  event.preventDefault();
  var inputSize = $("input#size").val();
  var inputToppings = $("input#toppings").val();

  var newPizza = new Pizza(inputSize, inputToppings);
  $("#output").append(newPizza.fullDetails);
  });
})
