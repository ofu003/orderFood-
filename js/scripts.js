function Pizza(inputSize, arrayToppings){
  this.Size = inputSize;
  this.Toppings = arrayToppings;
}


Pizza.prototype.fullDetails = function(){
  return "You ordered a " + this.Size + "pizza with the following toppings: " + this.Toppings;
}


$(function(){
  $("form#form").submit(function(event) {
  event.preventDefault();

  //var inputSize = $("input#size").val();
  //var inputToppings = $("input#toppings").val();

    var inputSize = $("#size").val();

    var inputToppings;
    var arrayToppings=[];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = $(this).val();
      arrayToppings.push(inputToppings);
      console.log(arrayToppings);
      //$("#answers").append(inputToppings);
      // var inputToppings;
      var newPizza = new Pizza(inputSize, arrayToppings);
      console.log(newPizza);
      console.log(newPizza.Size);
      console.log(newPizza.Toppings);
      $("#answers").text(newPizza.fullDetails());
    });
      // $("#answers").append(newPizza);
      //var newPizza = new Pizza(inputSize, inputToppings);
      // console.log(this.Toppings);
      //console.log(newPizza.Toppings);
  //$("#output").append(newPizza.fullDetails);
  });
})
