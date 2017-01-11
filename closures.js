module.exports = {
    /**
     * Return an object with a next() property. Each time the next function
     * is called the value returned is one higher than the time before.
     */
     
    counter: function (start){
        let number = start;
            return {
                next: function(){
                number = number + 1;
                return number;
                }
                
            }
    },
    
     
    /**
     * Return an object with a discount() property. The discount property should
     * accept an amount that the original price should be discounted by. This
     * should not affect the original amount!
     *
     *  let tot = closures.total(20);
     *  tot.discount(0.50); // return 10
     *  tot.discount(0.20); // return 16
     */
    total: function (amount) {
        let originalPrice = amount;
        return{
            discount: function(number){
                let newPrice = (1-number)*originalPrice;
                return newPrice;
            }
        }   
    },

    /**
     * Set the name of a user. Only valid names can be provided. A `valid` name is
     * one that matches the regex ^[A-Za-z ]+$.
     *
     *  let user = closures.user();
     *  user.setName('Francis Bacon');  // return true
     *  user.getName();                 // return 'Francis Bacon'
     *  user.setName('123 hi');         // return false
     *  user.getName();                 // return 'Francis Bacon'
     */
    user: function () {
       let name = '';
        return{
            setName: function(input){
                
                let nameTest = new RegExp('^[A-Za-z ]+$');
                if (nameTest.test(input) === true){
                    name = input;
                 return true;
             }else{
                    return false;
             }
            
        },
          
            getName: function(){
                return name;
            }
        }
    },

    /**
     * Track the number of lives remaining in a game.
     *
     *  let lives = closures.lives(5);
     *  lives.died();
     *  console.log(lives.left()); // 4
     *  lives.died();
     *  console.log(lives.left()); // 3
     *  lives.restart();
     *  console.log(lives.left()); // 5
     */
    lives: function (start) {
   
        let livesLeft = start;

        return{
            
            died: function(){
               livesLeft = livesLeft - 1;
                return livesLeft;
            },
     
            left: function(){
                return livesLeft;
            },
             
            restart: function(){
                livesLeft = start;
                return livesLeft;

            },

        }
        
    },

    /**
     * Return a string that contains the 'message id' before the message text.
     * The message ID starts at one and increments with each record.
     *
     *  let logger = closures.messages();
     *  let msg = logger.record('first message');
     *  console.log(msg); // '[1] first message'
     *  msg = logger.record('second message');
     *  console.log(msg); // '[2] second message'
     */
    messages: function () {
       let counter = 0;
       return{ 
        record: function (message){
            counter = counter +1;
            return '['+ counter+ '] ' + message; 

        }
       }
    },

    /**
     * Create a pocket object that can contain COINS and TRINKETS. The pocket
     * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
     * coins. You can also return the number of coins() or trinkets().
     *
     * You can't have a negative number of coins or trinkets.
     *
     *  let pocket = closures.pocket(50);
     *  pocket.buy(); // buy for 10 coins
     *  console.log(pocket.coins()); // 40
     *  console.log(pocket.trinkets()); // 1
     *
     *  pocket.buy();
     *  console.log(pocket.coins()); // 30
     *  console.log(pocket.trinkets()); // 2
     *
     *  pocket.sell();
     *  console.log(pocket.coins()); // 35
     *  console.log(pocket.trinkets()); // 1
     */
    pocket: function (start) {
        let trinkets = 0;
        let coins = start;

        return{
            coins: function(){
                return coins;
            },

            buy: function(){
                coins = coins - 10;
                trinkets = trinkets +1;
                return trinkets;
            },

            trinkets: function(){
                return trinkets;
            },

            sell: function(){
                coins = coins + 5;
                trinkets = trinkets - 1;
                return trinkets;
            },
        }
        
    },

    /**
     * Return a function that accepts the value to multiply `val` by.
     *
     *  multiply(3)(5); // return 15
     */
    multiply: function (val) {
        let number = val;

        return function(num){   
           let total = val * num;
           return total;
        }

        
    },
};
