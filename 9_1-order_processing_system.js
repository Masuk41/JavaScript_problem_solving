// Build a order Processing system to understand dry and how import a function is...

function isValidPrice(price){
    return price === "number" && price>0;

}

function isValidEmail(email){
    return email.includes('@') && email.includes(".")
}

function calculateDiscount(price,discountPercent){
    if(isValidPrice(price)){
        return 0;
    }
    let discountAmount = (price*discountPercent)/100;
    return price - discountAmount;
}

function calculateFinalBill(price,vatPercentage=15){
    let vat = (price*vatPercentage)/100;
    return price + vat;
}

function formetBdt(amount){
    return `${amount.toFixed(2)}BDT`
}

function capitalized(str){
    if(!str) return "";
    return str.charAt(0).toUpperCase() +str.slice(1);
}

function processOrder(user, itemPrice,discountCode){
    if(!isValidEmail(user.email)){
        console.log("Error:Invalid email")
    }

    let currentPrice = itemPrice;

    if(discountCode=="NLP"){
        currentPrice = discountAmount(itemPrice,20)
        console.log("20% discount apply")
    }
    let totalBill = calculateFinalBill(itemPrice);
    console.log("Final Amount to pay " ,formetBdt(totalBill))
    console.log("order completed successfully");
    
}

let user1 = {name:"Masuk", email:"shariar@gmail.com"}
processOrder(user1,1000,10)