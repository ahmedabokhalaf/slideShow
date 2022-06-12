var i=1;
var timeId;
function changeImg(){
    timeId = setTimeout(changeImg, 1000);
    if(i>5) i=1;
    document.images[0].src = "images/img0"+i+".jpg";
    i++;
}
function returnImgSrc(){
    clearTimeout(timeId);
    document.images[0].src="images/img01.jpg";
}