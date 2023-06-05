"use strict";

const fs = require('fs');
/* const fetch = require('node-fetch'); */
const prompt = require("prompt-sync")({ sigint: true });

const fetchData = async () => {
  try {
    const response = await fetch('https://dummyapi.online/api/movies');
    const data = await response.json();
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('data.json', jsonData, 'utf8');
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

const displayCatlog = async () => {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonData);

    for (let i = 0; i < data.length; i++) {
      console.log(`Movie ID: ${data[i].id}`);
      console.log(`Movie Name: ${data[i].movie}`);
      console.log(`Movie Rating: ${data[i].rating}`);
      console.log(`Movie Image Link: ${data[i].image}`);
      console.log(`Movie IMDb Link: ${data[i].imdb_url}`);
      console.log();
    }

    fs.writeFileSync('data.json', JSON.stringify(data));
  } catch (error) {
    console.error('Failed to display catalog:', error);
  }
};

const addNew = async () => {
  try {
    const mId = prompt(`Please enter the ID of the new movie: `);
    const mName = prompt(`Please enter the name of the new movie: `);
    const mRating = prompt(`Please enter the rating of the new movie: `);
    const mImage = prompt(`Please enter the image of the new movie: `);
    const mImdb = prompt(`Please enter the IMDb link of the new movie: `);

    const jsonData = fs.readFileSync('data.json', 'utf8');
    const data = JSON.parse(jsonData);

    const newData = {
      id: mId,
      movie: mName,
      rating: mRating,
      image: mImage,
      imdb_url: mImdb
    };

    data.push(newData);
    console.log('Movie added successfully');10
    fs.writeFileSync('data.json', JSON.stringify(data));
  } catch (error) {
    console.error('Failed to add movie:', error);
  }
};

const updateDetailsById = async () => {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf8');
    let data = JSON.parse(jsonData);
    const tId = prompt(`Enter the ID of the movie you want to update: `);
    const mId = prompt(`Enter the new ID: `);
    const mName = prompt(`Enter the new name: `);
    const mRating = prompt(`Enter the new rating: `);
    const mImage = prompt(`Enter the new image: `);
    const mImdb = prompt(`Enter the new IMDb link: `);

    data = data.map(movie => {
      if (movie.id === tId) {
        movie.id = mId;
        movie.movie = mName;
        movie.rating = mRating;
        movie.image = mImage;
        movie.imdb_url = mImdb;
      }
      return movie;
    });

    fs.writeFileSync('data.json', JSON.stringify(data));
    console.log('Movie details updated successfully');
  } catch (error) {
    console.error('Failed to update movie details:', error);
  }
};

//44444444444444444444444444444444444444444444444444


const  updateDetailsByName = async () =>{
  try{
const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);
let tName = prompt(`enter the name of the movie you want to update `);
let mId = prompt(`enter the new id  `);
let mName = prompt(`please enter the new name `);
let mRating = prompt(`please enter the new rating  `);
let mImage = prompt(`please enter the new image  `);
let mImdb = prompt(`please enter the new imbd link  `);
for ( let i=0; i<data.length;i++){
  if (data[i].movie == tName ){
      data[i].id=mId;
      data[i].movie=mName;
      data[i].rating=mRating;
      data[i].image=mImage;
      data[i].imdb_url=mImdb;
  }
}
fs.writeFile('data.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('movie updated');
});   
  }catch(error) {
    console.error('Failed to update movie details:', error);
  }
};


//555555555555555555555555555555555555555555555555555555555555555555



const deleteMovieById = async ()=>{
  try{
  const jsonData = fs.readFileSync('data.json', 'utf8');
  const data = JSON.parse(jsonData);
  let tId = prompt(`enter the id of the movie you want to delete `);
  data = data.filter(obj => obj.id != tId);
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('movie updated');
  });
  }catch(error){
    console.error('Failed to update movie details:', error);
  } 
};





//6666666666666666666666666666666666666666666666666666666666666666666



const searchForMovieByID  = async ()=> {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf8');
    let data = JSON.parse(jsonData);
  let tId =prompt("enter the id you want to search ")
  for ( let i=0; i<data.length;i++){
      if (data[i].id == tId ){
          console.log("the movie you want is in the catloag ");
          let y=prompt("if you want to see the movie details press 1");
          if(y==1)
          console.log(`movie id : ${data[i].id} ,  movie name : ${data[i].movie} , movie rating : ${data[i].rating} , movie image link : ${data[i].image} , movie imbd link : ${data[i].imdb_url} `);
      }
  }
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  });    
  } catch (error) {
    console.error('Failed to update movie details:', error);
  } 
  
};


const searchForMovieByName  = async ()=> {
 try {
  const jsonData = fs.readFileSync('data.json', 'utf8');
  let data = JSON.parse(jsonData);
  let tName =prompt("enter the name of the movie you want to search ")
  for ( let i=0; i<data.length;i++){
      if (data[i].movie == tName ){
          console.log("the movie you want is in the catloag ");
          let y=prompt("if you want to see the movie details press 1");
          if(y==1)
          console.log(`movie id : ${data[i].id} ,  movie name : ${data[i].movie} , movie rating : ${data[i].rating} , movie image link : ${data[i].image} , movie imbd link : ${data[i].imdb_url} `);
      }
  }
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  });    
 } catch (error) {
  console.error('Failed to update movie details:', error);
 }

};


const searchForMovieByRating  = async ()=> {
 try {
  const jsonData = fs.readFileSync('data.json', 'utf8');
  let data = JSON.parse(jsonData);
  let tRating =prompt("enter the rating of the movie you want to search ")
  for ( let i=0; i<data.length;i++){
      if (data[i].rating == tRating ){
          console.log("the movie you want is in the catloag ");
          let y=prompt("if you want to see the movie details press 1");
          if(y==1)
          console.log(`movie id : ${data[i].id} ,  movie name : ${data[i].movie} , movie rating : ${data[i].rating} , movie image link : ${data[i].image} , movie imbd link : ${data[i].imdb_url} `);
      }
  }
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  }); 
 } catch (error) {
  console.error('Failed to update movie details:', error);
 }
};


const searchForMovie  = async ()=> {
  try {
    const jsonData = fs.readFileSync('data.json', 'utf8');
  const data = JSON.parse(jsonData);
  let x = prompt(`press 1 to search by id 
  press 2 to search by name 
  press 3 to search by rating `);
  if (x==1)
  searchForMovieByID();
  if (x==2)
  searchForMovieByName();
  if (x==3)
  searchForMovieByRating();
  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) throw err;
  });  
  } catch (error) {
    console.error('Failed to update movie details:', error);
  }
};




const menu = async () => {

  let choice = 0;
  while (choice != "exit") {
    choice = await prompt(
      `* welcome to your movies catloag *
         **********************************
          what is your choice :
          1-display movie catlog 
          2-Add New Movie 
          3-Update Movie Details by id 
          4-Update Movie Details by name 
          5-Delete Movie by id 
          6-Search
          * press exit * 
          **********************************`);
    if (choice == 1)
       displayCatlog();
    if (choice == 2)
      await addNew();
    if (choice == 3)
      await updateDetailsById();
    if (choice == 4)
      await updateDetailsByName();
    if (choice == 5)
      await deleteMovieById();
    if (choice == 6)
      await searchForMovie(); 
  }
};

const main = async () => {
  await fetchData();
   menu();
};

main();
