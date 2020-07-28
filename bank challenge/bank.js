bank = 85000;
wallet = 430;

function withdraw (amount){
    if (bank > amount) {
        bank = bank - amount;
        wallet = wallet + amount;
    } else {
        return console.log("bank empty");
    }
}

function deposit (amount){
    if (wallet > amount ) {
        wallet = wallet - amount;
        bank = bank + amount;
    } else {
        return console.log("wallet empty");
    }
}

console.log("bank: ", bank );
console.log("wallet: ", wallet );
withdraw (20);
console.log("bank: ", bank );
console.log("wallet: ", wallet );
deposit (50);
console.log("bank: ", bank );
console.log("wallet: ", wallet );
deposit (600);