function Pizza(inputSize, arrayToppings){
  this.Size = inputSize;
  this.Toppings = arrayToppings;
  this.numberOfToppings = arrayToppings.length;
}

Pizza.prototype.fullDetails = function(){
    return "You ordered a " + this.Size + " pizza with the following " + this.numberOfToppings + " topping(s): " + this.Toppings + "."
}

Pizza.prototype.Price = function(){
  var price=10.00;
  if (this.Size==="small"){
    price = price - 2.50
  }
  else if (this.Size==="medium"){
    price=price;
  }
  else if (this.Size==="large"){
    price = price + 3.50;
  }
  else{
    alert("Please make a valid selection");
    location.reload();
  }
  var increment = this.numberOfToppings*0.75;
  var finalPrice= increment + price;
  return " That will be " + "$" + finalPrice.toFixed([2]);
}

$(function(){
  $("form#form").submit(function(event) {
  event.preventDefault();
    var inputSize = $("#size").val();
    var inputToppings;
    var arrayToppings=[];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputToppings = $(this).val();
      arrayToppings.push(inputToppings);
      var newPizza = new Pizza(inputSize, arrayToppings);
      $("#answers").show();
      $("#answers").text(newPizza.fullDetails());
      $("#answers").append(newPizza.Price());
    });
  });
  $("#reset").click(function(event){
    event.preventDefault();
    $("#answers").hide();
    arrayToppings=[];
    $("input:checkbox[name=toppings]:selected").prop("selected", false);
    location.reload();
  })
})
