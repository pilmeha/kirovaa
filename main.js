var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/froke.jpg') {
      myImage.setAttribute ('src','images/pink-monster.jpg');
    } else if (mySrc === 'images/pink-monster.jpg') {
      myImage.setAttribute ('src','images/demon-dom.jpg');
    } else if (mySrc === 'images/demon-dom.jpg') {
        myImage.setAttribute ('src','images/glich.png');
    } else if (mySrc === 'images/glich.png') {
        myImage.setAttribute ('src','images/klacksa.jpg');
    } else if (mySrc === 'images/klacksa.jpg') {
        myImage.setAttribute ('src','images/kzuap.png');
    } else if (mySrc === 'images/kzuap.png') {
        myImage.setAttribute ('src','images/lps.png');
    } else if (mySrc === 'images/lps.png') {
        myImage.setAttribute ('src','images/mountains.jpg');
    } else if (mySrc === 'images/mountains.jpg') {
        myImage.setAttribute ('src','images/nerv.png');
    } else if (mySrc === 'images/nerv.png') {
        myImage.setAttribute ('src','images/purple-klacksa.jpg');
    } else if (mySrc === 'images/purple-klacksa.jpg') {
        myImage.setAttribute ('src','images/rubic.png');
    } else if (mySrc === 'images/rubic.png') {
        myImage.setAttribute ('src','images/soul-park.png');
    } else if (mySrc === 'images/soul-park.png') {
        myImage.setAttribute ('src','images/sun-forest.png');
    } else if (mySrc === 'images/sun-forest.png') {
        myImage.setAttribute ('src','images/sweet-food.png');
    } else if (mySrc === 'images/sweet-food.png') {
        myImage.setAttribute ('src','images/zakat.jpg');
    } else {
      myImage.setAttribute ('src','images/froke.jpg');
    }
}
