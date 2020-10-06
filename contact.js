/*This document allows for the collection of Json data from an API.*/

//Declaring lists and arrays
let currentVideo = {};
let availableVideo = [];
let videos = [];

//using FETCH to call the API
fetch(
    'https://allsportsapi.com/api/football/?&met=Videos&eventId=76387&APIkey=10eac71b83957853c4cbd0ce7706e3e16c3b411fca45b2388a897e1467844ede'
)
    .then((res)=>{
        return res.json();//Get results as JSON
    })
    .then((loadedVideos)=>{
        videos = loadedVideos.result.map((loadedvid)=>{ //loading results into array
            const formattedVideo = {
                video_url:  loadedvid.video_url,
            }
            return formattedVideo;
        });
        startGame();//Calls start game method
    })
    .catch((err)=>{//catch any error that may arise
        console.error(err);
    });
//This method takes all the video array elements and expands them into a list
startGame = () => {
    availableVideo = [...videos];
    getVideo(); //This calls the get video method
}
//This method finds the 4th (Highlights) video link and sets it as the video.source element
getVideo=()=>{
    for (i = 4; i<5;i++)
    currentVideo = availableVideo[i];
    document.getElementById("video").src = currentVideo.video_url;
}