/*This document allows for the collection of Json data from an API.*/
//This creates the reference points
const title = document.getElementById('title');
const loader = document.getElementById('loader');
const container = document.getElementById('container');
//Declaring lists and arrays
let currentTitle = {};
let titleCounter = 0;
let availableTitle = [];
let titleArray = [];
//This declares a constant
const MAX_TITLES = 5;
//using FETCH to call the API
fetch(
    'http://api.mediastack.com/v1/news?limit=10&access_key=6cc2b25bb4648bf2be9dd513f262c5d2&sources=cnn&catagories=general&languages=en'
)
    .then((res)=>{
        return res.json(); //Get results as JSON
    })
    .then((loadedTitles)=>{
        titleArray = loadedTitles.data.map((loadedTitle)=>{ //loading results into array
            const formattedTitle = {
                title: loadedTitle.title,
            }
            return formattedTitle;
        });                
        container.classList.remove("hidden");//makes the webpage visable
        loader.classList.add("hidden"); //hides the loader
        startGame(); //Calls start game method       
    })
    .catch((err)=>{//catch any error that may arise
        console.error(err);
    });
//This method takes all the title array elements and expands them into a list
startGame = () => {
    titleCounter = 0;
    availableTitle = [...titleArray];
    getNewTitle();//This calls the getNewtitle method
};
/*This method finds 5 headlines and concantenates them into one string before etthing the 
results as the innerText element of the title*/
getNewTitle = () => {    
    while (titleCounter<MAX_TITLES){
        currentTitle = availableTitle[titleCounter];
        title.innerText = title.innerText+ "***" + currentTitle.title;
        titleCounter++;
    }   
}       
startGame();