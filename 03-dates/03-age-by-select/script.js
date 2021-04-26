/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy+"."+mm+dd;
    let d = document.getElementById("dob-day");
    let m =document.getElementById("dob-month");
    let y =document.getElementById("dob-year");

    document.getElementById('run').onclick = function () {
        let bdd = d.value.padStart(2, '0');
        let bmm = m.value.padStart(2, '0');
        let byyyy = y.value.padStart(2, '0');
        let bday = byyyy + "." + bmm + bdd;
        let age= Math.trunc(today - bday);
        alert("Your age is: "+age);
    }




    //console.log(numberOfDaysInCurrentMonthOnly);
    //document.getElementById("dob-month").valueOf()

})();
