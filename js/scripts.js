function Pizza(inputToppings){
  //this.Size = inputSize;
  this.Toppings = inputToppings;

}
//
// Pizza.prototype.fullDetails = function(){
//   return "You ordered a " + + "pizza with the following toppings" + this.Toppings;
// }


$(function(){
  $("form#form").submit(function(event) {
  event.preventDefault();

  //var inputSize = $("input#size").val();
  //var inputToppings = $("input#toppings").val();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = $(this).val();
      //$("#answers").append(inputToppings);
      // var inputToppings;
      var newPizza = new Pizza(inputToppings);
      //console.log(newPizza);
      console.log(newPizza.Toppings);
    });
  // var inputToppings;
  // var newPizza = new Pizza(inputToppings);

  //$("#output").append(newPizza.fullDetails);
  });
})
