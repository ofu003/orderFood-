function Pizza(inputSize, arrayToppings){
  this.Size = inputSize;
  this.Toppings = arrayToppings;
  this.numberOfToppings = arrayToppings.length;
  //this.price = price;
}

// function price(inputSize){
//   var price = 10.00;
//   if (inputSize==="small"){
//     price = (price -2.50);
//   }
//   else {
//     price = price;
//   }
//   return price;
// }


Pizza.prototype.fullDetails = function(){
  return "You ordered a " + this.Size + " pizza with the following toppings: " + this.Toppings + " (" + this.numberOfToppings + ")" ;
}

Pizza.prototype.Price = function(){
  var price=10.00;
  if (this.Size==="small"){
    price = price - 2.50
  }
  else {
    price=price;
  }
  return "It costs " + price;
  console.log(price);
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
      console.log(arrayToppings.length);
      //$("#answers").append(inputToppings);
      // var inputToppings;
      var newPizza = new Pizza(inputSize, arrayToppings);
      console.log(newPizza);
      console.log(newPizza.Size);
      console.log(newPizza.Toppings);
      $("#answers").text(newPizza.fullDetails());
      $("#answers").append(newPizza.Price());
    });
      // $("#answers").append(newPizza);
      //var newPizza = new Pizza(inputSize, inputToppings);
      // console.log(this.Toppings);
      //console.log(newPizza.Toppings);
  //$("#output").append(newPizza.fullDetails);
  });
})
