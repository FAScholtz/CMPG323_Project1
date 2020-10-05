const title = document.getElementById('title');
const loader = document.getElementById('loader');
const container = document.getElementById('container');

let currentTitle = {};
let titleCounter = 0;
let availableTitle = [];

let titleArray = [];

const MAX_TITLES = 5;

fetch(
    'http://api.mediastack.com/v1/news?limit=10&access_key=6cc2b25bb4648bf2be9dd513f262c5d2&sources=cnn&catagories=general&languages=en'
)
    .then((res)=>{
        return res.json();
    })
    .then((loadedTitles)=>{
        titleArray = loadedTitles.data.map((loadedTitle)=>{
            const formattedTitle = {
                title: loadedTitle.title,
            }
            return formattedTitle;
        });                
        container.classList.remove("hidden");
        loader.classList.add("hidden");
        startGame();        
    })
    .catch((err)=>{
        console.error(err);
    });

startGame = () => {
    titleCounter = 0;
    availableTitle = [...titleArray];
    getNewQuestion();
};

getNewQuestion = () => {    
    while (titleCounter<MAX_TITLES){
        currentTitle = availableTitle[titleCounter];
        title.innerText = title.innerText+ "***" + currentTitle.title;
        titleCounter++;
    }   
}       
startGame();