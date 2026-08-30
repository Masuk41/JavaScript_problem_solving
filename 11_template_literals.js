 // Math
${price * quantity}         
 // Function call
${getDiscount(price)}       
// Ternary
${stock > 0 ? "Yes" : "No"}  
// Method
${name.toUpperCase()}        
 // Comparison
${age >= 18}                

// ======================
// p1 Login Status
function showUserStatus(username, isLoggedIn) {
  console.log(
    `User: ${username}
Status: ${isLoggedIn ? "Logged In" : "Logged Out"}`
  );
}

showUserStatus("Masuk", true);

// p2 calculate bill

function getDiscount(price) {
  return price * 0.2;
}

let price = 1000;

console.log(
  `Original Price: ${price} taka
Discount: ${getDiscount(price)} taka
Final Price: ${price - getDiscount(price)} taka`
);