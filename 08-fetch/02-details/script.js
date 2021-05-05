/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', () => {
        let input = +document.getElementById("hero-id").value;
        fetch('http://localhost:8000/_shared/api.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const list = data.heroes.map(heroes => {

                    if (input === heroes.id) {
                        return `
                            Id: ${heroes.id}
                            Name: ${heroes.name}
                            Alterego: ${heroes.alterEgo}
                            Abilities: ${heroes.abilities}
                        `
                    }

                })
                document.querySelector('#target')
                    .insertAdjacentHTML("afterbegin", list);
            })
    })



   /* let heroID = document.getElementById("hero-id"); //get ID from form
    let elementTemplate = document.createElement("template"); //create template element
    let targetLocation = document.getElementById("target"); //select location to display
    let id;
   //append new template element to target location

    document.getElementById("run").addEventListener("click", function (){
        console.log(heroID.value);
        userAction()
        targetLocation.appendChild(elementTemplate);
    })





    async function userAction (){
        let response = await fetch('http://localhost:8000/_shared/api.json');
        let myJson = await response.json();

        console.log(myJson.heroes[heroID.value-1]["name"]);
        //id = myJson.heroes[heroID.value]["id"];
        //console.log(myJson.heroes.filter(function(){heroID}));

        //elementTemplate.innerHTML = myJson.heroes[heroID.value-1];


    }*/



})();
