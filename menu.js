
const prompt = require("prompt-sync")()
module.exports = {
    getMenuOption: function() {
        const choices = ["1","2","3","4","5"];
        let startGame = false;
        let userInput = '';
        console.log(`1. Human vs Human\n2. Random AI vs Random AI\n3. Human vs Random AI\n4. Human vs Unbeatable AI\n5. Exit`)
        userInput = prompt();
        
        while(!choices.includes(userInput)){
            console.log(`you choose : ${userInput}`);
            console.log("Please choose from the following menu:")
            console.log(`1. Human vs Human\n2. Random AI vs Random AI\n3. Human vs Random AI\n4. Human vs Unbeatable AI\n5. Exit`)

        
        userInput = prompt();

        }

        return userInput;
    }
    
 }

// run this function to test whether you have correctly implemented the other function
function checkOptions() {
    let option = module.exports.getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}
