$(function(){

  //start coding here...
  var balance        =   0.0;
  var  $amountInput   =   $('#amount');
  var  $balanceArea   =   $('#balance');
  var  $choice  =   $('#choice');

  $("#submit").click(function(e){
    // if ()

    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();
    if ($choice.val() === "deposit") {
      balance += +$amountInput.val();
      $balanceArea.text("balance: " + balance);
    } else if ($choice.val() === "withdrawal"){
      balance =  balance - +$amountInput.val();
      $balanceArea.text("balance: " + balance);
    } else {
      alert("Please select a type of transaction");
    }
  });
});
