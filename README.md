# adoptAPet
ExpressJS training


Tasks! ⬇

Imagine you are looking to add a new furry friend to your family! In this project, you’ll use the Express framework to create a http server for a simple pet adoption site that contains multiple routes.
The site will have three main pages:

    The homepage
    A page that lists all available pets of a given type of animal
    A page that displays a profile page for an individual pet

The focus of the exercise is for you to get familiar with the Express framework and routing.
Let’s get started!
Set up the Express app
1. Via NPM, create a new Node project with npm init -y. Install Express by writing npm i express on the terminal and create a app.js file at the root of your project – that will be your server’s entrypoint file. You can use the Hello World example from the official documentation to help you get started with a basic boilerplate.
Optional: To make things easier for you, you can also install Nodemon with npm i nodemon, and add a script to use Nodemon to run your files instead. Add the following to your package.json file after installing Nodemon:

"scripts": {
"dev": "nodemon app.js"
}

From here on, you can use npm run dev to start your server instead, and Nodemon will automatically restart your server when you save your files!
2. Create a new file, petList.js. Copy paste the following snippet into it – we will use the pets object to populate the upcoming webpages. Remember to import petList.js into app.js.

const pets = {
  dogs: [
    {
      name: 'Spot',
      age: 2,
      breed: 'Dalmatian',
      description: 'Spot is an energetic puppy who seeks fun and adventure!',
      url: 'https://placedog.net/500/280',
    },
    {
      name: 'Shadow',
      age: 4,
      breed: 'Border Collie',
      description:
        'Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!',
      url: 'https://placedog.net/540/205',
    },
  ],
  cats: [
    {
      name: 'Snowflake',
      age: 1,
      breed: 'Tabby',
      description:
        'Snowflake is a playful kitten who loves roaming the house and exploring.',
      url: 'http://placekitten.com/500/500',
    },
  ],
  rabbits: [
    {
      name: 'Easter',
      age: 4,
      breed: 'Mini Rex',
      description:
        'Easter is a sweet, gentle rabbit who likes spending most of the day sleeping.',
      url: 'https://loremflickr.com/320/240/rabbit?lock=7',
    },
  ],
};

module.exports = pets;

<>Create the index route</>
3. We can create our first route with app.get() on the `/` route. This endpoint should return an h1 element with the text ‘Adopt a Pet!’. HTML can be returned as a Template literal.
4. Bind the server to a port with the app.listen() method, with a port of your choice (for this exercise we suggest 8000 but any number between ports 1024 and 65535 is valid). Start your server with node app.js (or npm run dev if you installed Nodemon) and open http://localhost:8000 on your browser. You should see the heading displayed on the page!
5. Let’s have our server output more elements to the page. Inside the res.send() method for your root route, add the following after the h1 element:

    An <p> element that reads ‘Browse through the links below to find your new furry friend:’.
    An <ul> element with three <li> elements. The unordered list should contain three items: ‘Dogs’, ‘Cats’, and ‘Rabbits’.

Create the animals route
6. We have our root route nicely underway! Next we need a route to show lists of each animal type: dogs, cats and rabbits. To do that, we’ll add a new app.get(), with /animals/:pet_type as our path, where :pet_type is a dynamic parameter.
7. Have this route return in its res.send():

    An <h1> element with the text ‘List of :pet_type‘, where :pet_type is the value that comes from the req.params object.
    An <ul> element, with as many <li> elements inside as there are pets in the same type of animal coming from petList.js(hint).

8. We’re ready to start routing our application! Back in the `/` route, add an <a> tag inside each <li> element:

    Dogs should redirect to /animals/dogs
    Cats should redirect to /animals/cats
    Rabbits should redirect to /animals/rabbits

Create the pet profile route
9. Lastly, each pet needs its individual profile page. To do that, we’ll add a new route, animals/:pet_type/:pet_id.
10. In the callback for that route, create a variable called findPet, that will search the pets object from petList.js for a single pet. You can access the key dynamically based on the value of the :pet_type parameter. Then, you can use the :pet_id parameter to access the index position of the pet in the array.
11. In the res.send() method for this route, you need to return:

    An <h1> element containing the pet’s name.
    An <img> element with the pet’s photo.
    An <p> element containing the pet’s description.
    An <ul> element with two <li> elements, one for the pet’s breed and one for the pet’s age.

12. To tidy it up, let’s go back to our animals/:pet_type/ route, and add an <a> tag inside of each <li> element. The URL we want to link to should follow the pattern animals/:pet_type/:pet_id, where :pet_type is the current route’s pet type, and :pet_id is the pet’s index position in the appropriate array in petList.js.
