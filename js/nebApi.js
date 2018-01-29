/**
 * Created by automacair on 1/15/18.
 */
var Account = require('wallet').Account;
var Neb = require('wallet').Neb;
var neb = new Neb();
neb.setRequest(new Neb.HttpRequest("https://testnet.nebulas.io"));
var Transaction = require('wallet').Transaction;
//var from = "1a263547d167c74cf4b8f9166cfa244de0481c514a45aa2c";
//var from = "333cb3ed8c417971845382ede3cf67a0a96270c05fe2f700";
//var to = "333cb3ed8c417971845382ede3cf67a0a96270c05fe2f700";
var value = "100000";
var nonce = 1;
var gasPrice = "1000000";
var gasLimit = "2000000";
var password = "passphrase";
var generatedAddressArray = [];
var generatedTxhash = [];
var generatedContractAddress = [];
var generatedPublicKey = [];
var generatedPrivateKey = [];
var generatedAccountStateBalance = [];

var account, state, tx, txhash;
var txArray = [];

//----------------   Remote Procedure Calls (RPCs)--------



//------------------------  Management RPC -------------------




//------------------------  Web generated  -------------------

//------------ Generate Account ---------

function createNewAccountFuncWeb() {

    account = Account.NewAccount();

    document.getElementById("display1").innerHTML = "<h1>" +"Step 1: Create Account." + "</h1>"+ "<h4>" +"Account Address"+ "</h4>"
        +"<textarea>" + account.getAddressString()+"</textarea>" +
        "<h4>" +"Public Key"+ "</h4>"+
        "<textarea>" + account.getPublicKeyString()+"</textarea>"+
        "<h4>" +"Private Key"+ "</h4>"+
        "<textarea>" + account.getPrivateKeyString()+"</textarea>"
        +"<h6>"+ "<i class=\"material-icons\">code</i> "+ "API: Account.NewAccount( )" +"</h6>" +"<button onclick='createNewAccountFuncWeb()'>" + "Generate Account" + "</button>";

    console.log("Address: " + account.getAddressString());
    console.log("Private key: " + account.getPrivateKeyString());
    console.log("Public key: " + account.getPublicKeyString());

    console.log("Test address for development " +"6ae5991ea26be1ee2f846e24cae105ad802b4927e71473ba");
}


// --------------- Claim Nas ----------------

function claimNas() {

    var email = Math.random() + "test@demo.io";
    var request = new window.XMLHttpRequest();

    // -----Check if user entered in a value
    var userInput;
     var element = document.getElementById('step2');
    if (element != null) {
        console.log("element != null");
        userInput = element.value;
    }


    if (userInput != null){
        console.log("userInput != null");

        // --------- Automatic entry without user input---------
        if (account != null){
            console.log("account != null");

            var url = "https://testnet.nebulas.io/claim/api/claim/"+ email + "/"+ account.getAddressString() +"/";


            request.open("GET", url, false);
            request.send();
          var result = JSON.parse(request.responseText);

            document.getElementById("display2").innerHTML = "<h1>" + "Please Wait " + "</h1>" + "<i class='material-icons time'>access_time</i>" + "<h5>"+ "Getting your Nas Tokens Now" + "</h5>";

            // The First wait time to grab the tokens

            setTimeout(function () {
                state = neb.api.getAccountState(account.getAddressString());

                //document.getElementById("display2").innerHTML ="<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<textarea id='step2'>" + account.getAddressString() + "</textarea>"+"<h3>" +" Tokens received "  + "<i class='material-icons'>thumb_up</i>"+"<button onclick='claimNas()'>" + "Tokens" + "</button>"

                document.getElementById("display2").innerHTML = "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<i class='material-icons up'>thumb_up</i>"+"<textarea id='step2'>" + account.getAddressString() + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";

                console.log("The balance: "+state.balance);
            }, 12000);


            setTimeout(function () {

                document.getElementById("display2").innerHTML =
                    "<h1>" + "Please Wait " + "</h1>" +
                    "<i class='material-icons time'>hourglass_empty</i>" +
                    "<h5>"+ "Getting tokens from: " + "</h5>" +
                    "<h5>"+ "https://testnet.nebulas.io/claim/api/claim/" + "</h5>"

            }, 5000);

            setTimeout(function () {

                document.getElementById("display2").innerHTML =
                    "<h1>" + "One Moment " + "</h1>" +
                    "<i class='material-icons time'>hourglass_full</i>" +
                    "<h5>"+ "Getting tokens from Nebulas " + "</h5>"

            }, 2000);
        }
        // --------- Automatic entry without user input ABOVE---------



        if (account == null){
            console.log("account == null");


             url = "https://testnet.nebulas.io/claim/api/claim/"+ email+ "/"+ userInput +"/";

            request.open("GET", url, false);
            request.send();
            result = JSON.parse(request.responseText);


            document.getElementById("display2").innerHTML = "<h1>" + "Please Wait " + "</h1>" + "<i class='material-icons time'>access_time</i>" + "<h5>"+ "Getting your Nas Tokens Now" + "</h5>";

            setTimeout(function () {
                state = neb.api.getAccountState(userInput);

               // document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+ "<textarea id='step2'>" + userInput + "</textarea>"+"<h3>" +" Tokens received "  + "<i class='material-icons'>thumb_up</i>"+ "<button onclick='claimNas()'>Tokens" + ""+ "</button>"

                document.getElementById("display2").innerHTML = "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<i class='material-icons up'>thumb_up</i>"+"<textarea id='step2'>" + userInput + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";

                console.log(state.balance);
            }, 5000);
        }
    }




    if (userInput == null) {
        console.log("userInput == null");


        element = document.getElementById('step2');
        if (element != null) {
            console.log("element != null");
            userInput = element.value;
        }

        if (account == null){
            console.log("account == null");

            url = "https://testnet.nebulas.io/claim/api/claim/"+ email+ "/"+ userInput + "/";

            request.open("GET", url, false);
            request.send();
            result = JSON.parse(request.responseText);

            document.getElementById("display2").innerHTML = "<h1>" + "Please Wait " + "</h1>" + "<i class='material-icons time'>access_time</i>" + "<h5>"+ "Getting your Nas Tokens Now" + "</h5>";

            setTimeout(function () {
                //state = neb.api.getAccountState(userInput);

                //document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+ "<textarea id='step2'>" + userInput + "</textarea>"+"<h3>" +" Tokens received "  + "<i class='material-icons'>thumb_up</i>"+ "<button onclick='claimNas()'>Tokens" + ""+ "</button>"

                document.getElementById("display2").innerHTML = "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<i class='material-icons up'>thumb_up</i>"+"<textarea id='step2'>" + userInput + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";

                //console.log(state.balance);
                //console.log(state.nonce);
            }, 5000);
        }

        if (account != null){
            console.log("account != null");

            url = "https://testnet.nebulas.io/claim/api/claim/"+ email+ "/"+ userInput + "/";

            request.open("GET", url, false);
            request.send();
            result = JSON.parse(request.responseText);

            document.getElementById("display2").innerHTML = "<h1>" + "Please Wait " + "</h1>" + "<i class='material-icons time'>access_time</i>" + "<h5>"+ "Getting your Nas Tokens Now" + "</h5>";

            setTimeout(function () {
                state = neb.api.getAccountState(userInput);

                //document.getElementById("display2").innerHTML =  "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+ "<textarea id='step2'>" + userInput + "</textarea>"+"<h3>" +" Tokens received "  + "<i class='material-icons'>thumb_up</i>"+ "<button onclick='claimNas()'>Tokens" + ""+ "</button>"

                document.getElementById("display2").innerHTML = "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+ "<i class='material-icons up'>thumb_up</i>"+"<textarea id='step2'>" + userInput + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";


                console.log(state.balance);
                //console.log(state.nonce);
            }, 5000);
        }
    }
}




//------------ Account balance ------------

function getAccountStateFuncWeb() {


    var userInput;
    var element = document.getElementById('step2');
    if (element != null) {
        console.log("element != null");
        userInput = element.value;
    }


    if (userInput != null) {
        console.log("userInput != null");

        // --------- Automatic entry without user input---------
        if (account != null) {
            console.log("account != null");

            //var accountInput = document.getElementById("step3").value;

            state = neb.api.getAccountState(account.getAddressString());

            document.getElementById("display2").innerHTML = "<h1>" +"Step 2: Claim Tokens."  + "</h1>"+"<textarea id='step2'>" + account.getAddressString() + "</textarea>"+"<button onclick='claimNas()'>" + "Tokens"+ "</button>"+ "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance"+ "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";


            console.log(state.balance);
            console.log(state.nonce);


        }


        if (account == null) {
            console.log("account == null");
            state = neb.api.getAccountState(userInput);


            document.getElementById("display2").innerHTML =
                "<textarea id='step2' placeholder='Enter Your Account address or press TOKENS to get tokens sent to your generated account'>" + userInput + "</textarea>" +
                "<i class='material-icons'>account_balance</i> " +
                "<h3>" + "Your Balance: " + state.balance + "</h3>" +
                "<h3>" + "Nonce: " + state.nonce + "</h3>" +
                "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance" + "</button>" + "<h6>" + "Your Balance: " + state.balance + "</h6>";


            console.log(state.balance);
            console.log(state.nonce);


            console.log(account);
        }
    }
}




/*
function getAccountStateFuncWeb() {


    var userInput;
    var element = document.getElementById('step3');
    if (element != null) {
        console.log("element != null");
        userInput = element.value;
    }


    if (userInput != null) {
        console.log("userInput != null");

        // --------- Automatic entry without user input---------
        if (account != null) {
            console.log("account != null");

            //var accountInput = document.getElementById("step3").value;

            state = neb.api.getAccountState(account.getAddressString());

            document.getElementById("display3").innerHTML =
                "<h1>" + "Step 3: Check Account Balance." + "</h1>" +
                "<textarea id='step3' placeholder='Enter Your Account address or press TOKENS to get tokens sent to your generated account'>" + account.getAddressString() + "</textarea>" +
                "<i class='material-icons'>account_balance</i> " +
                "<h3>" + "Your Balance: " + state.balance + "</h3>" +
                "<h3>" + "Nonce: " + state.nonce + "</h3>" +
                "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance" + "</button>";

            console.log(state.balance);
            console.log(state.nonce);


        }


        if (account == null) {
            console.log("account == null");
            state = neb.api.getAccountState(userInput);


            document.getElementById("display3").innerHTML =
                "<h1>" + "Step 3: Check Account Balance." + "</h1>" +
                "<textarea id='step3' placeholder='Enter Your Account address or press TOKENS to get tokens sent to your generated account'>" + userInput + "</textarea>" +
                "<i class='material-icons'>account_balance</i> " +
                "<h3>" + "Your Balance: " + state.balance + "</h3>" +
                "<h3>" + "Nonce: " + state.nonce + "</h3>" +
                "<button onclick='getAccountStateFuncWeb()'>" + "Account Balance" + "</button>"


            console.log(state.balance);
            console.log(state.nonce);


            console.log(account);
        }
    }
}

*/
















//--------- Generate txHash ------------

function generateTransaction() {
    var testnetchainID = 1001;


    var fromAddress = document.getElementById("step3").value;
    var toAddress = document.getElementById("step3.1").value;


    if (fromAddress != ""){

        state = neb.api.getAccountState(fromAddress);

        // tx will search for a private key from account
        tx = new Transaction(testnetchainID, fromAddress, toAddress, neb.nasToBasic("1"), parseInt(state.nonce)+1);

        tx.signTransaction();

        //todo: allow the user to input his own "to" and "from" we need to add 2 textareas or input tags

        document.getElementById("display3").innerHTML =  "<h1>" + "Step 4: Make TxHash and Sign."   + "</h1>"+ "<textarea>" + tx.toString() + "</textarea>"+ "<button onclick='generateTransaction()'>" + "Generate TxHash and Sign"+ "</button>" + "<p>" + "We need to generate a txHash in order to send a transaction"+ "</p>";

        console.log(tx.toString());
        console.log(tx.toProtoString());


    }else {

        state = neb.api.getAccountState(account.getAddressString());

        tx = new Transaction(testnetchainID, account, account, neb.nasToBasic("1"), parseInt(state.nonce)+1);

        tx.signTransaction();

        //todo: allow the user to input his own "to" and "from" we need to add 2 textareas or input tags

        document.getElementById("display3").innerHTML =  "<h1>" + "Step 4: Make TxHash and Sign."   + "</h1>"+ "<textarea>" + tx.toString() + "</textarea>"+ "<button onclick='generateTransaction()'>" + "Generate TxHash and Sign"+ "</button>" + "<p>" + "We need to generate a txHash in order to send a transaction"+ "</p>";


        console.log(tx.toString());
        console.log(tx.toProtoString());

    }

}


function submitTransaction() {
    var resp = neb.api.sendRawTransaction(tx.toProtoString());
    txhash = resp.txhash;

    //document.getElementById('display5.1').innerHTML = "<textarea>" + txhash + "</textarea>" + "<h6>" + "You just created a txHash and signed the transaction "+ "</h6>";


    document.getElementById("display4").innerHTML =   "<h1>" + "Step 4: Submit the Transaction."  + "</h1>"+ "<textarea>" + txhash + "</textarea>"+ "<button onclick='submitTransaction()'>" + "Submit Transaction"+ "</button>" + "<p>" + "This will send some funds to your newly created account"+ "</p>"
}


function receiptTransaction() {
    neb.api.getTransactionReceipt(txhash, function (err, resp) {

        //document.getElementById('display6.1').innerHTML = "<textarea>" + JSON.stringify(resp) + "</textarea>" + "<h6>" + "Here's your receipt "+ "</h6>";

        document.getElementById("display5").innerHTML = "<h1>" + "Step 6: Get a Receipt."   + "</h1>"+ "<textarea>" + JSON.stringify(resp) + "</textarea>"+ "<button onclick='receiptTransaction()'>" + "Receipt "+ "</button>"

    });
}


function accountTest() {
    var account = Account.NewAccount();
    console.log(account.getPrivateKeyString());
    console.log(account.getPublicKeyString());
    console.log(account.getAddressString());
}




//todo get account state
// todo: seperate Neb from Web






//-------------------  Neb generated Information here -----


function createNewAccountFuncNeb() {

    var account = neb.api.NewAccount();
    var account = account.getAddressString();
    generatedAddressArray.push(account);

    document.getElementById("message").innerHTML = "<textarea>" + generatedAddressArray[0] + "</textarea>" + "<br>" + "<h5>" + "This is your new generated account address"+ "</h5>";
    console.log(generatedAddressArray[0]);

}

function getAccountStateFuncNeb() {
    var accountState = neb.api.getAccountState(generatedAddressArray[0]);
    console.log(JSON.stringify(accountState));

    document.getElementById("message").innerHTML = "<textarea>" + "Balance: " + accountState.balance + " nouce " + accountState.nonce + "</textarea>" + "<br>" + "<h5>" + "As you can see the balance is: '0' "+ "in our newly created account" +"</h5>"

    //todo: create a if statement if the balance is 0 display you have 0 but if balance is > than 0 display you have this much balance
}

function unlockAccountFuncNeb() {
    //curl -i -H Accept:application/json -X POST http://localhost:8685/v1/account/unlock -d '{"address":"8a209cec02cbeab7e2f74ad969d2dfe8dd24416aa65589bf", "passphrase":"passphrase"}'

    var unlockTheAccount = neb.admin.unlockAccount(generatedAddressArray[0], password);
    console.log(JSON.stringify(unlockTheAccount));

    var unlockTheAccount2 = neb.admin.unlockAccount(from, password);
    console.log(JSON.stringify(unlockTheAccount2));

    document.getElementById("message").innerHTML = "<h3>" + "Unlocked "+ "</h3>" + "<br>" + "<h5>" + "Great you just unlocked your account"+ "</h5>"

}


function transactionFuncNeb() {

    var contract = {
        "source": "demo playground",
        "sourceType": "js",
        "args": "[\"0\",\"otto\"]"
    };
    //var transaction = neb.api.sendTransaction(from, generatedAddressArray[0],value,nonce + 1,gasPrice,gasLimit,contract);

    var transaction = neb.api.sendTransaction(from, generatedAddressArray[0],value,nonce + 1, gasPrice, gasLimit);
    console.log(JSON.stringify(transaction));

    generatedTxhash.push(transaction.txhash)
    generatedContractAddress.push(transaction.contract_address)

    console.log(generatedTxhash);
    console.log(generatedContractAddress);
}



function getTransactionReceiptFuncNeb() {
    var transactionReceipt = neb.api.getTransactionReceipt(generatedTxhash[0]);
    console.log(generatedTxhash[0]);

    console.log(JSON.stringify(transactionReceipt));

}




function nebState() {

    var nebulasState = neb.api.getNebState();
    console.log(JSON.stringify(nebulasState))
    //document.getElementById("output").innerHTML = JSON.stringify(nebulasState)
}
//nebState()

function nodeInfomation() {
    var nodeinfoApi = neb.api.nodeInfo()
    console.log(JSON.stringify(nodeinfoApi))
}

function blockDumpFunc() {
    var accountState = neb.api.blockDump(1);
    console.log(JSON.stringify(accountState));
}


function accountsFunc() {

    var accounts = neb.api.accounts();
    console.log(JSON.stringify(accounts));
}







function gasPriceFunc() {

    var theGasPrices = neb.api.gasPrice();
    console.log(JSON.stringify(theGasPrices));
}







function accounts() {
    //var Neb = require('neb')
    //var neb = new Neb();
    var accounts = neb.api.accounts();

    console.log(JSON.stringify(accounts));
}
//accounts()


















function sendTransaction() {
    //var from = "1a263547d167c74cf4b8f9166cfa244de0481c514a45aa2c";
    //var to = "333cb3ed8c417971845382ede3cf67a0a96270c05fe2f700";
    //var value = "100000";

    var allAccounts = neb.api.accounts();
    from = allAccounts[0];
    to = allAccounts[1];
    var state = neb.api.getAccountState(from);
    var contract = {
        "source": "demo playground",
        "sourceType": "js",
        "args": "[\"0\",\"otto\"]"
    };
    var resp = neb.api.estimateGas(from, to, value, parseInt(state.nonce +1),"0", "0", contract);
    console.log(JSON.stringify(resp));
}


function estimateTheGasPrice() {
    var estimatedGasPrice = neb.api.estimateGas(from,to,value,nonce,gasPrice,gasLimit)
    console.log(JSON.stringify(estimatedGasPrice));


}























