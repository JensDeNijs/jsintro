/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

   /*let target = document.querySelector(".target");
    let source = document.querySelector(".source");
    let img = document.createElement('IMG');

    img.src = source;

    document.getElementById('target').appendChild(img); */


    //target.href = 'https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340';


    let source = document.getElementById("source");
    let img = document.createElement('img');



    img.src = source.getAttribute('data-image');

    source.parentNode.removeChild(source);
    document.getElementById('target').appendChild(img);


})();
