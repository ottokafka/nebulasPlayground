
function displayAll() {

    document.getElementById("display1").innerHTML = "<h1>" + "Step 1: Create Account." + "</h1>"+ "<h4>" + "Account Address"+ "</h4>" + "<textarea placeholder='To generate a new account address press GENERATE ACCOUNT'>" + "</textarea>"+ "<button onclick='createNewAccountFuncWeb() + editor1()'>" + "Generate Account" + "</button>" ;


    document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<textarea id='step2' placeholder='Enter Your - ACCOUNT ADDRESS - to get Tokens'>" + "</textarea>"+"<button onclick='claimNas() + editor2()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb() + editor2()'>" + "Account Balance"+ "</button>";



    document.getElementById("display3").innerHTML = "<h1>" + "Step 3: Make TxHash and Sign."   + "</h1>"+
        "<h4>" + "TO ADDRESS"+ "</h4>"+
        "<textarea id='step3.1' placeholder='Receiving: Enter a TO Address - This address you will Send to.'>" + "</textarea>" +
        "<h4>" + "VALUE TO SEND"+ "</h4>"+
        "<textarea id='step3.2' placeholder='Value to Send: default is 100000'>" + "</textarea>"+"<h4>" + "GAS PRICE"+ "</h4>"+
        "<textarea id='step3.3' placeholder='GAS PRICE: default is 1000000'>" + "</textarea>"+ "<h4>" + "GAS LIMIT"+ "</h4>"+
        "<textarea id='step3.4' placeholder='GAS LIMIT: default is 2000000'>" + "</textarea>"+"<h4>" + "OUTPUT"+ "</h4>"+
        "<textarea id='step3.5' placeholder='SIGNED OUTPUT'>" + "</textarea>"+
        "<button onclick='generateTransaction() + editor3()'>" + "Generate TxHash and Sign"+ "</button>";


    document.getElementById("display4").innerHTML =   "<h1>" + "Step 4: Submit the Transaction."  + "</h1>"+ "<br>"+ "<button onclick='submitTransaction() + editor4()'>" + "Submit Transaction"+ "</button>"


    document.getElementById("display5").innerHTML = "<h1>" + "Step 5: Get a Receipt."   + "</h1>"+ "<br>"+ "<button onclick='receiptTransaction() + editor5()'>" + "Receipt "+ "</button>"


}
displayAll();

