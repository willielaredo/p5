let width = 2000
let height = 2000
var death_grips_img
var pizza_sound
var tamale_sound
var falafel_sound
var polenta_sound
var tamale_img

function preload() {
    death_grips_img = loadImage('death_grips_pixelated.png')
    pizza_sound = loadSound('pizza.ogg')
    tamale_sound = loadSound('tamale.ogg')
    falafel_sound = loadSound('falafel.ogg')
    polenta_sound = loadSound('polenta.ogg')
    tamale_img = loadImage('tamale.jpg')
    pizza_img = loadImage('pizza.jpg')
    falafel_img = loadImage('falafel.jpg')
    polenta_img = loadImage('polenta.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pizza_sound.setVolume(.3)
    tamale_sound.setVolume(.2)
    polenta_sound.setVolume(.2)
}

// // DISPLAY IMAGE ON PAGE AND DRAG TEXT AROUND
// function draw() {
//     background(255)
//     image(death_grips_img, 100, 100)
//     textSize(25)
//     text("what up death grips", mouseX, mouseY)
// }

// // DRAW CIRCLES WHEN MOUSE IS DRAGGED. HOLD DOWN MOUSE FOR BLACK CIRCLES UN-PRESS FOR DEFAULT WHITE CIRCLES

// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }

// //RENDER POINTS, LINES, RECTS, ELLIPES
// let w = 500
// let bulls_x = 1000
// let bulls_y = 500

// function draw() {
//     point(40, 50);
//     line(10, 20, 400, 20);
//     line(10, 18, 450, 18);
//     line(10, 16, 500, 16);
//     rect(10, 25, 400, 300);
//     rectMode(CENTER);
//     rect(600, 600, 400, 300);
//     point(600, 600);
//     rect(1000, 100, 100, 100)
//     stroke(255)
//     strokeWeight(2)
//     fill(0)
//     ellipse(bulls_x, bulls_y, w, w)
//     fill(255 * .25)
//     ellipse(bulls_x, bulls_y, w * .8, w * .8)
//     fill(255 * .5)
//     ellipse(bulls_x, bulls_y, w * .6, w * .6)
//     fill(255 * .75)
//     ellipse(bulls_x, bulls_y, w * .4, w * .4)
//     fill(255)
//     ellipse(bulls_x, bulls_y, w * .2, w * .2)
// }

// // ANIMATE A ELLIPSE MOVING ACROSS THE SCREEN
// let x = 0;

// function draw() {
//     ellipse(x, height / 2, 20, 20);
//     x = x + 1;
// }


// // DRAW CONCENTRIC CIRCLES WITH A GRADIENT STYLE COLOR SHIFT
// let max_dia = width / 20
// let min_dia = max_dia * .3
// let dia_increment = 10
// let grid_square = width / 25

// function draw() {
//     // background(255)
//     noFill();
//     for (var i = 0; i <= width; i += grid_square) {
//         for (var j = 0; j <= height; j += grid_square) {

//             for (var k = max_dia; k >= min_dia; k -= dia_increment) {
//                 fill(k / max_dia * 255, 200, max_dia * 150, 255 / 3)
//                 ellipse(i, j, k, k)
//             }
//             rectMode(CENTER)
//             rect(i, j, min_dia * .7, min_dia * .7)
//         }
//     }
// }


// // DRAW CIRCLES OF VARYING SHADES BASED ON THE LOCATION OF THE MOUSE ON THE SCREEN
// function draw() {
//     // fill(0, 120)
//     strokeWeight(0)

//     // // ASSIGN STROKE COLOR FOR ONE SIDE OF THE SCREEN VS THE OTHER
//     // if (mouseX < width / 3) {
//     //     stroke(255, 0, 0)
//     // } else { stroke(0) }

//     if (mouseIsPressed) {

//         //MAP THE FILL TO BLACK ON THE LEFT AND WHITE ON THE RIGHT
//         var grey = map(mouseX, 0, width, 0, 255);
//         fill(grey);
//         ellipse(mouseX, mouseY, 20, 20)
//     }
// }


// // CLICK ON COLORED CIRCLES TO CHANGE BG COLOR OF SCREEN

// var bgcolor = 255
// var fill1 = 255
// var fill2 = 100;

// function draw() {
//     background(bgcolor);
//     textSize(32)
//     fill(0);
//     text('click on the circles to change background color. or type first letter of color on your keyboard', 10, 30)
//     textSize(12)
//     fill(255);
//     rect(20, 50, 250, 70);
//     fill(fill1);
//     ellipse(50, 80, 50, 50);
//     fill(0);
//     text('white', 35, 115)
//     var d1 = dist(50, 80, mouseX, mouseY);
//     fill(fill2);
//     ellipse(120, 80, 50, 50);
//     fill(0);
//     text('grey', 105, 115)
//     var d2 = dist(120, 80, mouseX, mouseY);
//     fill(255, 0, 0);
//     ellipse(190, 80, 50, 50);
//     fill(0);
//     text('red', 185, 115)
//     var d3 = dist(190, 80, mouseX, mouseY);

//     if (d1 < 25 && mouseIsPressed) {
//         bgcolor = fill1
//     } else if (d2 < 25 && mouseIsPressed) { bgcolor = fill2 } else if (d3 < 25 && mouseIsPressed) { bgcolor = color(255, 0, 0) }

// }

// function keyTyped() {
//     if (key === 'w' || key === 'W') {
//         bgcolor = fill1
//     } else if (key === 'g' || key === 'G') {
//         bgcolor = fill2
//     } else if (key === 'r' || key === 'R') {
//         bgcolor = color(255, 0, 0)
//     }
// }


// TYPE LETTERS TO SEE FOOD IMAGES AND HEAR THEIR NAMES SPOKEN

var state

function draw() {
    background(255)
    textSize(36)
    text('"Z" is for Pizza', 10, 36)
    text('"F" is for Falafel', 10, 86)
    text('"T" is for Tamale', 10, 136)
    text('"P" is for Polenta', 10, 186)
    if (state == 'tamale') {
        image(tamale_img, 200, 200)
    } else if (state == 'polenta') {
        image(polenta_img, 200, 200)
    } else if (state == 'pizza') {
        image(pizza_img, 200, 200)
    } else if (state == 'falafel') {
        image(falafel_img, 200, 200)
    }
}

function keyTyped() {
    if (key === 'z' || key === 'Z') {
        pizza_sound.play()
        state = 'pizza'
    } else if (key === 'p' || key === 'P') {
        polenta_sound.play()
        state = 'polenta'
    } else if (key === 't' || key === 'T') {
        tamale_sound.play()
        state = 'tamale'
    } else if (key === 'f' || key === 'F') {
        falafel_sound.play()
        state = 'falafel'
    }
}