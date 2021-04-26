/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age;
    let gender;
    let town;
    let agreed=false;

    while(agreed == false){
        age = prompt("What is your age? ");
        gender = prompt("What is your gender? ");
        town = prompt("What is your town? ");
        if(confirm("are you " +age +", are you a "+gender+" who lives in "+town+"?")){
            agreed= true
        };

    }

})();
