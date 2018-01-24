
function displayAll() {

    document.getElementById("display1").innerHTML = "<h1>" +"Step 1 Create account." + "</h1>"+ "<h5>" + "from address"+ "</h5>"+"<textarea>" + "</textarea>"+ "<button onclick='createNewAccountFuncWeb()'>" + "Generate Account" + "</button>" ;


    document.getElementById("display2").innerHTML =  "<h1>" +"Step 2 Claim Nas."  + "</h1>"+ "<br>"+ "<button onclick='claimNas()'>" + "Claim Nas"+ "</button>"



        document.getElementById("display3").innerHTML = "<h1>" + "Step 3 Check account Balance."   + "</h1>"+  "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>"


    document.getElementById("display4").innerHTML =  "<h1>" + "Step 4 Make TxHash and Sign."   + "</h1>"+ "<br>"+ "<button onclick='generateTransaction()'>" + "Generate txHash and sign"+ "</button>" + "<p>" + "We need to generate a txHash in order to send a transaction"+ "</p>"


    document.getElementById("display5").innerHTML =   "<h1>" + "Step 5 Submit the Transaction."  + "</h1>"+ "<br>"+ "<button onclick='submitTransaction()'>" + "Submit Transaction"+ "</button>" + "<p>" + "This will send some funds to your newly created account"+ "</p>"


    document.getElementById("display6").innerHTML = "<h1>" + "Step 6 Get a Receipt."   + "</h1>"+ "<br>"+ "<button onclick='receiptTransaction()'>" + "Receipt "+ "</button>" + "<p>" + "Your info"+ "</p>"


}
displayAll()

