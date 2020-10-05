function get_NASA_photo(){

}

fetch(
    'https://api.nasa.gov/planetary/apod?api_key=4RetuVYWE5a77jOubyzeIwvONdsx04gZM19ZkaYF'
)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        display_image(data.hdurl);
    })
    .catch(function(error){
        console.log("Error :" + error);
    });
    
    function display_image(image_url){
        document.getElementById("image").src=image_url;
    }