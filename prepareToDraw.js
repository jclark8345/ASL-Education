var handOverDevice;
var handLeftDevice;
var handRightDevice;
var handBelowDevice;
var handAboveDevice;
var handCloseDevice;
var handFarDevice;

var addition;
var subtraction;

var ten;
var eleven;
var twelve;
var thirteen;
var fourteen;
var fifteen;
var sixteen;
var seventeen;
var eighteen;

var green_face;
var limegreen_face;
var yellow_face;
var orange_face;
var redorange_face;
var red_face;

var first;
var second_place;
var third;
var hand_fist;
var hand_thumb;
var x_pic;
var y_pic;
var equals;
var question;
var skip;
var change;
var ribbon;
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    handOverDevice = loadImage('https://i.postimg.cc/tCxQ12cv/hand-over-device.jpg');
    handLeftDevice = loadImage('https://i.postimg.cc/D0W73Qdb/hand-to-left.jpg');
    handRightDevice = loadImage('https://i.postimg.cc/PfLLj1q4/hand-to-right.jpg');
    handBelowDevice= loadImage('https://i.postimg.cc/MTnGz8zT/hand-to-down.jpg');
    handAboveDevice= loadImage('https://i.postimg.cc/SQzK5qZ1/hand-to-up.jpg');
    handCloseDevice= loadImage('https://i.postimg.cc/fRMTJdM1/hand-to-close-annotated.png');
    handFarDevice = loadImage('https://i.postimg.cc/g0TYSB3P/hand-to-far-away-annotated.png');

    zeroDigit = loadImage('https://i.postimg.cc/Qx6W9Ncw/0-digit.png');
    oneDigit = loadImage('https://i.postimg.cc/sfmMqfHx/1-digit.png');
    twoDigit = loadImage('https://i.postimg.cc/NFbxwgk3/2-digit.png');
    threeDigit = loadImage('https://i.postimg.cc/Jz7k6D5p/3-digit.png');
    fourDigit = loadImage('https://i.postimg.cc/TwV9CjLY/4-digit.png');
    fiveDigit = loadImage('https://i.postimg.cc/jqhcfXYM/5-digit.png');
    sixDigit = loadImage('https://i.postimg.cc/28cxcS6v/6-digit.png');
    sevenDigit = loadImage('https://i.postimg.cc/qRTchtbf/7-digit.png');
    eightDigit = loadImage('https://i.postimg.cc/0Q0Yp8Fz/8-digit.png');
    nineDigit = loadImage('https://i.postimg.cc/QC6cyfXs/9-digit.png');

     zero = loadImage('https://i.postimg.cc/mkF92CCW/0-pic.png');
     one = loadImage('https://i.postimg.cc/4nk9KyQ7/1-pic.png');
     two = loadImage('https://i.postimg.cc/HWJv7Ntd/2-pic.png');
     three = loadImage('https://i.postimg.cc/bwPmWwfw/3-pic.png');
     four = loadImage('https://i.postimg.cc/JzQpLCRc/4-pic.png');
     five = loadImage('https://i.postimg.cc/xdxgXGJX/5-pic.png');
     six = loadImage('https://i.postimg.cc/d1h6r7r4/6-pic.png');
     seven = loadImage('https://i.postimg.cc/G26QQcjr/7-pic.png');
     eight = loadImage('https://i.postimg.cc/y6SnNZVN/8-pic.png');
     nine = loadImage('https://i.postimg.cc/bNcgSwJ9/9-pic.png');
     ten = loadImage('https://i.postimg.cc/WzDcZBxF/10-pic.png');
     eleven = loadImage('https://i.postimg.cc/x8WD3sSs/11-pic.png');
     twelve= loadImage('https://i.postimg.cc/nV5JxLQv/12-pic.png');
     thirteen= loadImage('https://i.postimg.cc/bw0c1HVT/13-pic.png');
     fourteen= loadImage('https://i.postimg.cc/JhKf27LH/14-pic.png');
     fifteen= loadImage('https://i.postimg.cc/j5FGR8Cs/15-pic.png');
     sixteen= loadImage('https://i.postimg.cc/90ws0Gqy/16-pic.png');
     seventeen= loadImage('https://i.postimg.cc/T2yPgFVJ/17-pic.png');
     eighteen= loadImage('https://i.postimg.cc/tCWCm6m1/18-pic.png');

    addition = loadImage('https://i.postimg.cc/rwH4qMj7/addition.png');
    subtraction = loadImage('https://i.postimg.cc/rmXttjvJ/subtraction.png');

    green_face = loadImage('https://i.postimg.cc/j2kZNPQV/green-face.png');
    limegreen_face= loadImage('https://i.postimg.cc/CLzv0rSw/lime-green-face.png');
    yellow_face= loadImage('https://i.postimg.cc/NMd4qmny/yellow-face.png');
    orange_face= loadImage('https://i.postimg.cc/Z5NVB9Wg/orange-face.png');
    redorange_face= loadImage('https://i.postimg.cc/XqXgVXMs/red-orange-face.png');
    red_face= loadImage('https://i.postimg.cc/Wpfn5mrC/red-face.png');

    x_pic = loadImage('https://i.postimg.cc/c4cFF8Cv/x.png');
    y_pic = loadImage('https://i.postimg.cc/13CJQhpP/y.png');
    question  = loadImage('https://i.postimg.cc/15yHV5Bs/question.png');
    equals = loadImage('https://i.postimg.cc/Bv1Fjd1x/equals.png');
    first = loadImage('https://i.postimg.cc/BnmYfqtZ/first.png');
    second_place = loadImage('https://i.postimg.cc/nhrK7qcZ/second.png');
    third = loadImage('https://i.postimg.cc/yYY040R9/third.png');

    skip = loadImage('https://i.postimg.cc/VLnTbQvm/skip.png');
    change = loadImage('https://i.postimg.cc/kgypfQWH/change.png');
    ribbon = loadImage('https://i.postimg.cc/FHhPdYwV/ribbon.png');
    hand_fist =loadImage('https://i.postimg.cc/NfCyTVzC/handwithfist.jpg');
    hand_thumb = loadImage('https://i.postimg.cc/Jn8tMWs0/handwiththumb.jpg');
}