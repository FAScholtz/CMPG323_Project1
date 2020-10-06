function get_NASA_photo(){//This creates the function

}
//using FETCH to call the API
fetch(
    'https://api.nasa.gov/planetary/apod?api_key=4RetuVYWE5a77jOubyzeIwvONdsx04gZM19ZkaYF'
)
    .then(function(response){
        return response.json();//Get results as JSON
    })
    .then(function(data){//Takes the information and passes it to the dinplay_image function
        display_image(data.hdurl);
    })
    .catch(function(error){//catch any error that may arise
        console.log("Error :" + error);
    });
    //This function takes the information passed to it and sets it as the image.source element.
    function display_image(image_url){
        document.getElementById("image").src=image_url;
    }