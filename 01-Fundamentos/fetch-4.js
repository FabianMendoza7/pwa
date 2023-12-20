let img = document.querySelector('img');

//get the readable string.
fetch("superman.png")
// .then(console.log)
.then(resp => resp.blob())
.then(imagen =>{
    //console.log(imagen);
    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;
})