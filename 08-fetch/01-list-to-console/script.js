/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function () {
        userAction()
    });


    async function userAction (){
        let response = await fetch('http://localhost:8000/_shared/api.json');
        let myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        console.log(myJson);
    }
})();
