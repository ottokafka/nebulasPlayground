
function displayAll() {

    document.getElementById("display1").innerHTML = "<h1>" + "Step 1: Create Account." + "</h1>"+ "<h4>" + "Account Address"+ "</h4>" + "<textarea placeholder='To generate a new account address press GENERATE ACCOUNT'>" + "</textarea>"+ "<button onclick='createNewAccountFuncWeb()'>" + "Generate Account" + "</button>" ;


    document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<textarea id='step2' placeholder='Enter Your - ACCOUNT ADDRESS - to get Tokens'>" + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>"




    //document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<textarea id='step2' placeholder='Enter Your - ACCOUNT ADDRESS - to get Tokens'>" + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"

        //document.getElementById("display3").innerHTML = "<h1>" + "Step 3: Check Account Balance."   + "</h1>"+ "<textarea id='step3' placeholder='Check the Balance by Entering Your ACCOUNT ADDRESS and press ACCOUNT BALANCE'>" + "</textarea>"+"<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>"


    document.getElementById("display3").innerHTML =  "<h1>" + "Step 3: Make TxHash and Sign."   + "</h1>"+  "<textarea id='step3' placeholder='From Address: Enter Your Account Address to Create a TxHash and Sign It. This is the From address'>" + "</textarea>"+ "<textarea id='step3.1' placeholder='Receiving: Enter a To Address or a - This address you will Send to.'>" + "</textarea>" +"<button onclick='generateTransaction()'>" + "Generate TxHash and Sign"+ "</button>" + "<p>" + "We need to generate a txHash in order to send a transaction"+ "</p>"


    document.getElementById("display4").innerHTML =   "<h1>" + "Step 4: Submit the Transaction."  + "</h1>"+ "<br>"+ "<button onclick='submitTransaction()'>" + "Submit Transaction"+ "</button>" + "<p>" + "This will send some funds to your newly created account"+ "</p>"


    document.getElementById("display5").innerHTML = "<h1>" + "Step 5: Get a Receipt."   + "</h1>"+ "<br>"+ "<button onclick='receiptTransaction()'>" + "Receipt "+ "</button>"


}
displayAll();

