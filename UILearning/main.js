var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'DSC00007.JPG') {
      myImage.setAttribute ('src','DSC00011.JPG');
    } else {
      myImage.setAttribute ('src','DSC00007.JPG');
    }
}