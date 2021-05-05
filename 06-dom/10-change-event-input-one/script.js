/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let value;
    let span = document.getElementById("counter");
    let passOne = document.getElementById("pass-one");

    passOne.setAttribute('maxlength', '10');

    passOne.addEventListener("keyup", function (e) {

        value = document.getElementById("pass-one").value
        span.innerHTML = (value.length + "/10");
    });

})();
