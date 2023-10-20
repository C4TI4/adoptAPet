const express = require('express');
const pets = require("./petList");
const app = express();
const port = 8000;


// route to homepage and navbar
app.get('/', (req, res) => {
    const homepage = `
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
    `;
    res.send(homepage);
});


// route for each animal type
app.get('/animals/:pet_type', (req, res) => {
    const { pet_type } = req.params;
    const animalList = pets[pet_type]; // Get the specific pet list based on the pet_type parameter

    if (animalList) {
        const petTypeCapitalized = pet_type.charAt(0).toUpperCase() + pet_type.slice(1);
        const listItems = animalList.map(pet => `<li>${pet.name}</li>`).join('');
        const petTypeHTML = `
            <h1>List of ${petTypeCapitalized}</h1>
            <ul>
                ${listItems}
            </ul>
        `;
        res.send(petTypeHTML);
    } else {
        // If the requested pet type does not exist, return a 404 error
        res.status(404).send('Pet type not found');
    }
});


app.listen(port, () => {
console.log(`Adopt a pet APP listening on port ${port}`)
})