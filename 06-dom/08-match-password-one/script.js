/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {

        let one = document.getElementById("pass-one");
        let two = document.getElementById("pass-two");

        if (one.value !== two.value){

            console.log("test");
            console.log(one.value);
            console.log(two.value);

            one.style.backgroundColor = "red";
            two.style.backgroundColor = "red";

        }else{
            one.style.backgroundColor = "white";
            two.style.backgroundColor = "white";
        }

    });


})();
