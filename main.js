{
var scene = 2;
var time1 = 0;
var tcarX = 200;
var tcarY = 110;
var roadlineX = 195;
var playerX = 25;
var playerY = 190;
var playerX2 = 370;
var playerY2 = 190;
var Up = 0;
var Right = 0;
var Up2 = 0;
var Right2 = 0;
var points = 0;
var points2 = 0;
var spikesX = random(5, 150);
var spikesY = random(5, 375);
var spikes = false;
var spikesX2 = random(5, 150);
var spikesY2 = random(5, 375);
var spikesX3 = random(225, 375);
var spikesY3 = random(5, 375);
var spikesX4 = random(225, 375);
var spikesY4 = random(5, 375);
var wall = 390;
var spikesWX = 150;
var spikesW = 5;
var spikesWY = 150;
var spikesWX2 = 375;
var spikesWSX2 = 200;
var bounceXY1 = 5;
var bounceXY2 = 370;
var token1 = 5;
var token2 = 380;
var tokenX = random(token1, token2);
var tokenY = random(token1, token2);
var wallS = 5;
var pointsT = 10;
var pointsT2 = 20;
} // var
draw = function() {
    if (scene === 2) { // Racero Home Screen
    background(0, 0, 0);
    fill(0, 255, 0);
    stroke(255, 255, 255);
    rect(25, 25, 350, 350);
    fill(255, 0, 0);
    rect(25, 25, 50, 50);
    textSize(10);
    fill(0, 0, 0);
    text("Controls", 31, 52);
    textSize(30);
    fill(0, 0, 0);
    text("Racero", 155, 100);
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(150, 240, 100, 50);
    textSize(13);
    fill(0, 0, 0);
    stroke(255, 255, 255);
    rect(150, 300, 100, 50);
    text("Classic Racero", 157, 270);
    fill(255, 255, 255);
    text("Two Players", 163, 330);
    fill(0, 0, 255);
    stroke(0, 0, 0);
    rect(tcarX, tcarY, 5, 5);
    fill(255, 0, 0);
    rect(150, 175, 100, 25);
    fill(60, 0, 255);
    rect(150, 200, 100, 25);
    fill(0, 0, 0);
    text("Bot Mode", 173, 193);
    text("Bots", 187, 217);
    mouseClicked = function () {
    if (mouseX > 150 && mouseX < 250 && mouseY > 240 && mouseY < 290) {
    scene = 3;    
    }
    if (mouseX > 150 && mouseX < 250 && mouseY > 300 && mouseY < 350) {
    scene = 4;    
    }
    if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
    scene = 7;    
    }
    if (mouseX > 150 && mouseX < 250 && mouseY > 175 && mouseY < 200) {
    scene = 8;    
    }
    if (mouseX > 150 && mouseX < 250 && mouseY > 200 && mouseY < 225) {
    scene = 9;    
    }
    };
    if (tcarY === 110) {
    tcarX -= 1;    
    }
    if (tcarY === 65) {
    tcarX += 1;    
    }
    if (tcarX === 140) {
    tcarY -= 1;    
    }
    if (tcarX === 260) {
    tcarY += 1;    
    }
    
    } // Racero Home Screen
    if (scene === 3) { // Classic Racero
    background(0, 0, 0);
    fill(122, 122, 122);
    rect(wallS, wallS, wall, wall);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(playerX, playerY, 25, 25);
    fill(238, 255, 0);
    rect(tokenX, tokenY, 10, 10);
    fill(0, 0, 0);
    text("Points: " + points, pointsT, pointsT2);
    if (playerX >= tokenX - 24 && playerX <= tokenX + 5 && playerY >= tokenY - 24 &&           playerY <= tokenY  + 5) {
    tokenX = random(token1, token2);  
    tokenY = random(token1, token2); 
    points += 1;
    spikes = true;
    spikesX = random(spikesW, spikesWX);
    spikesY = random(spikesW, spikesWY); 
    spikesX2 = random(spikesW, spikesWX);
    spikesY2 = random(spikesW, spikesWY);
    spikesX3 = random(spikesWSX2, spikesWX2);
    spikesY3 = random(spikesW, spikesWY); 
    spikesX4 = random(spikesWSX2, spikesWX2);
    playerX = 175;
    playerY = 245;
    Right = 0;
    Up = 0;
    }
    if (spikesX < tokenX + 25 && spikesX > tokenX - 25 && spikesY < tokenY + 25 && spikesY > tokenY - 25) {
    spikes = false;    
    }
    if (spikesX2 < tokenX + 25 && spikesX2 > tokenX - 25 && spikesY2 < tokenY + 25 && spikesY2 > tokenY - 25) {
    spikes = false;    
    }
    if (spikesX3 < tokenX + 25 && spikesX3 > tokenX - 25 && spikesY3 < tokenY + 25 && spikesY3 > tokenY - 25) {
    spikes = false;    
    }
    if (spikesX4 < tokenX + 25 && spikesX4 > tokenX - 25 && spikesY4 < tokenY + 25 && spikesY4 > tokenY - 25) {
    spikes = false;    
    }
    keyPressed = function () {
    if (keyCode === UP) {
    Up = true;  
    }
    if (keyCode === DOWN) {
    Up = false;    
    }
    if (keyCode === RIGHT) {
    Right = true;    
    }
    if (keyCode === LEFT) {
    Right = false;    
    }
    if (keyCode === 87) {
    Up = true;  
    }
    if (keyCode === 83) {
    Up = false;    
    }
    if (keyCode === 68) {
    Right = true;    
    }
    if (keyCode === 65) {
    Right = false;    
    }
    };
    if (Up === true && playerY > bounceXY1) {
    playerY -= 2.5;    
    }
    if (Up === false  && playerY < bounceXY2) {
    playerY += 2.5;   
    }
    if (Right === true && playerX < bounceXY2) {
    playerX += 2.5;    
    }
    if (Right === false && playerX > bounceXY1) {
    playerX -= 2.5;    
    }
    if (playerY === bounceXY2) {
    Up = true;    
    }
    if (playerY === bounceXY1) {
    Up = false;    
    }
    if (playerX === bounceXY2) {
    Right = false;   
    }
    if (playerX === bounceXY1) {
    Right = true;    
    }
    if (points < 25 && points > 15) {
    bounceXY1 = 15;
    bounceXY2 = 360;
    spikesW = 40;
    spikesWX2 = 360;
    token1 = 25;
    token2 = 360;
    wall = 370;
    wallS = 15;
    pointsT = 20;
    pointsT2 = 30;
    }
    if (points < 35 && points > 25) {
    bounceXY1 = 25;
    bounceXY2 = 350;
    spikesW = 50;
    spikesWX2 = 350;
    token1 = 35;
    token2 = 350;
    wall = 350;
    wallS = 25;
    pointsT = 30;
    pointsT2 = 40;
    }
    if (points < 45 && points > 35) {
    bounceXY1 = 35;
    bounceXY2 = 340;
    spikesW = 60;
    spikesWX2 = 340;
    token1 = 45;
    token2 = 340;
    wall = 330;
    wallS = 35;
    pointsT = 40;
    pointsT2 = 50;
    }
    if (points < 55 && points > 45) {
    bounceXY1 = 45;
    bounceXY2 = 330;
    spikesW = 70;
    spikesWX2 = 330;
    token1 = 55;
    token2 = 330;
    wall = 310;
    wallS = 45;
    pointsT = 50;
    pointsT2 = 60;
    }
    if (points < 65 && points > 55) {
    bounceXY1 = 55;
    bounceXY2 = 320;
    spikesW = 60;
    spikesWX2 = 320;
    token1 = 65;
    token2 = 320;
    wall = 290;
    wallS = 55;
    pointsT = 60;
    pointsT2 = 70;
    }
    if (points < 75 && points > 65) {
    bounceXY1 = 65;
    bounceXY2 = 310;
    spikesW = 70;
    spikesWX2 = 310;
    token1 = 75;
    token2 = 310;
    wall = 270;
    wallS = 65;
    pointsT = 70;
    pointsT2 = 80;
    }
    if (points < 85 && points > 75) {
    bounceXY1 = 75;
    bounceXY2 = 300;
    spikesW = 80;
    spikesWX2 = 300;
    token1 = 85;
    token2 = 300;
    wall = 250;
    wallS = 75;
    pointsT = 80;
    pointsT2 = 90;
    }
    if (points < 95 && points > 85) {
    bounceXY1 = 85;
    bounceXY2 = 290;
    spikesW = 90;
    spikesWX2 = 290;
    token1 = 95;
    token2 = 290;
    wall = 230;
    wallS = 85;
    pointsT = 90;
    pointsT2 = 100;
    }
    if (points < 105 && points > 95) {
    bounceXY1 = 95;
    bounceXY2 = 280;
    spikesW = 100;
    spikesWX2 = 280;
    token1 = 105;
    token2 = 280;
    wall = 210;
    wallS = 95;
    pointsT = 100;
    pointsT2 = 110;
    }
    if (points < 115 && points > 105) {
    bounceXY1 = 105;
    bounceXY2 = 270;
    spikesW = 110;
    spikesWX2 = 270;
    token1 = 115;
    token2 = 270;
    wall = 190;
    wallS = 105;
    pointsT = 110;
    pointsT2 = 120;
    }
    
    if (spikes === true) {
    fill(105, 0, 140);
    rect(spikesX, spikesY, 25, 25);
    if (points > 3) {
    rect(spikesX2, spikesY2, 25, 25);
    if (points > 5) {
    rect(spikesX3, spikesY3, 25, 25);
    if (points > 10) {
    rect(spikesX4, spikesY4, 25, 25); 
    }
    }
    }
    if (playerX >= spikesX - 25 && playerX <= spikesX + 25 && playerY >= spikesY - 25 &&                playerY <= spikesY + 25) {
    scene = 5;    
    }
    if (playerX >= spikesX2 - 25 && playerX <= spikesX2 + 25 && playerY >= spikesY2 - 25 &&                playerY <= spikesY2 + 25 && points > 3) {
    scene = 5;    
    }
    if (playerX >= spikesX3 - 25 && playerX <= spikesX3 + 25 && playerY >= spikesY3 - 25 &&                playerY <= spikesY3 + 25 && points > 5) {
    scene = 5;   
    }
    if (playerX >= spikesX4 - 25 && playerX <= spikesX4 + 25 && playerY >= spikesY4 - 25 &&                playerY <= spikesY4 + 25 && points > 10) {
    scene = 5;   
    }
    }
    } // Classic Racero
    if (scene === 8) { // Bot Mode
    background(0, 0, 0);
    fill(122, 122, 122);
    rect(5, 5, 390, 390);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(playerX, playerY, 25, 25);
    fill(255, 0, 0);
    rect(playerX2, playerY2, 25, 25);
    fill(238, 255, 0);
    rect(tokenX, tokenY, 10, 10);
    fill(0, 0, 255);
    text("Points: " + points, 10, 20);
    fill(255, 0, 0);
    text("Points: " + points2, 335, 20);
    if (playerX >= tokenX - 25 && playerX <= tokenX + 5 && playerY >= tokenY - 25 &&           playerY <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points += 1;
    playerX = 275;
    playerY = 275;
    }
     if (playerX2 >= tokenX - 25 && playerX2 <= tokenX + 5 && playerY2 >= tokenY - 25 &&           playerY2 <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points2 += 1;
    playerX2 = 175;
    playerY2 = 275;
    }
    if (playerX2 >= playerX - 25 && playerX2 <= playerX && playerY2 >= playerY - 25 &&             playerY2 <= playerY) {
    scene = 6;    
    }
    keyPressed = function () {
    if (keyCode === UP) {
    Up2 = true;  
    }
    if (keyCode === DOWN) {
    Up2 = false;    
    }
    if (keyCode === RIGHT) {
    Right2 = true;    
    }
    if (keyCode === LEFT) {
    Right2 = false;    
    }
    if (keyCode === 87) {
    Up2 = true;  
    }
    if (keyCode === 83) {
    Up2 = false;    
    }
    if (keyCode === 68) {
    Right2 = true;    
    }
    if (keyCode === 65) {
    Right2 = false;    
    }
    };
    if (points <= points2 + 1 && points2 > 0) {
    if (tokenX > playerX) {
    Right = true;    
    }
    if (tokenX < playerX) {
    Right = false;    
    }
    if (tokenY > playerY) {
    Up = false;    
    }
    if (tokenY < playerY) {
    Up = true;    
    }
    }
    if (points >  points2 + 1) {
    if (playerX2 > playerX) {
    Right = true;    
    }
    if (playerX2 < playerX) {
    Right = false;    
    }
    if (playerY2 > playerY) {
    Up = false;    
    }
    if (playerY2 < playerY) {
    Up = true;    
    }    
    }
    if (Up === true && playerY > 5) {
    playerY -= 2.5;    
    }
    if (Up === false  && playerY < 370) {
    playerY += 2.5;   
    }
    if (Right === true && playerX < 370) {
    playerX += 2.5;    
    }
    if (Right === false && playerX > 5) {
    playerX -= 2.5;    
    }
    if (Up2 === true && playerY2 > 5) {
    playerY2 -= 2.5;    
    }
    if (Up2 === false  && playerY2 < 370) {
    playerY2 += 2.5;   
    }
    if (Right2 === true && playerX2 < 370) {
    playerX2 += 2.5;    
    }
    if (Right2 === false && playerX2 > 5) {
    playerX2 -= 2.5;    
    }
    if (playerY === 370) {
    Up = true;    
    }
    if (playerY === 5) {
    Up = false;    
    }
    if (playerX === 370) {
    Right = false;   
    }
    if (playerX === 5) {
    Right = true;    
    }
    if (playerY2 === 370) {
    Up2 = true;    
    }
    if (playerY2 === 5) {
    Up2 = false;    
    }
    if (playerX2 === 370) {
    Right2 = false;   
    }
    if (playerX2 === 5) {
    Right2 = true;    
    }
    } // Bot Mode
    if (scene === 9) { // Bots
    background(0, 0, 0);
    fill(122, 122, 122);
    rect(5, 5, 390, 390);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(playerX, playerY, 25, 25);
    fill(255, 0, 0);
    rect(playerX2, playerY2, 25, 25);
    fill(238, 255, 0);
    rect(tokenX, tokenY, 10, 10);
    fill(0, 0, 255);
    text("Points: " + points, 10, 20);
    fill(255, 0, 0);
    text("Points: " + points2, 335, 20);
    if (playerX >= tokenX - 25 && playerX <= tokenX + 5 && playerY >= tokenY - 25 &&           playerY <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points += 1;
    playerX = 275;
    playerY = 275;
    }
     if (playerX2 >= tokenX - 25 && playerX2 <= tokenX + 5 && playerY2 >= tokenY - 25 &&           playerY2 <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points2 += 1;
    playerX2 = 175;
    playerY2 = 275;
    }
    if (playerX2 >= playerX - 25 && playerX2 <= playerX && playerY2 >= playerY - 25 &&             playerY2 <= playerY) {
    scene = 6;    
    }
    if (points2 <= points + 1) {
    if (tokenX > playerX2) {
    Right2 = true;    
    }
    if (tokenX < playerX2) {
    Right2 = false;    
    }
    if (tokenY > playerY2) {
    Up2 = false;    
    }
    if (tokenY < playerY2) {
    Up2 = true;    
    }
    }
    if (points2 >  points + 1) {
    if (playerX > playerX2) {
    Right2 = true;    
    }
    if (playerX < playerX2) {
    Right2 = false;    
    }
    if (playerY > playerY2) {
    Up2 = false;    
    }
    if (playerY < playerY2) {
    Up2 = true;    
    }    
    }
    if (points <= points2 + 1) {
    if (tokenX > playerX) {
    Right = true;    
    }
    if (tokenX < playerX) {
    Right = false;    
    }
    if (tokenY > playerY) {
    Up = false;    
    }
    if (tokenY < playerY) {
    Up = true;    
    }
    }
    if (points >  points2 + 1) {
    if (playerX2 > playerX) {
    Right = true;    
    }
    if (playerX2 < playerX) {
    Right = false;    
    }
    if (playerY2 > playerY) {
    Up = false;    
    }
    if (playerY2 < playerY) {
    Up = true;    
    }    
    }
    if (Up === true && playerY > 5) {
    playerY -= 2.5;    
    }
    if (Up === false  && playerY < 370) {
    playerY += 2.5;   
    }
    if (Right === true && playerX < 370) {
    playerX += 2.5;    
    }
    if (Right === false && playerX > 5) {
    playerX -= 2.5;    
    }
    if (Up2 === true && playerY2 > 5) {
    playerY2 -= 2.5;    
    }
    if (Up2 === false  && playerY2 < 370) {
    playerY2 += 2.5;   
    }
    if (Right2 === true && playerX2 < 370) {
    playerX2 += 2.5;    
    }
    if (Right2 === false && playerX2 > 5) {
    playerX2 -= 2.5;    
    }
    if (playerY === 370) {
    Up = true;    
    }
    if (playerY === 5) {
    Up = false;    
    }
    if (playerX === 370) {
    Right = false;   
    }
    if (playerX === 5) {
    Right = true;    
    }
    if (playerY2 === 370) {
    Up2 = true;    
    }
    if (playerY2 === 5) {
    Up2 = false;    
    }
    if (playerX2 === 370) {
    Right2 = false;   
    }
    if (playerX2 === 5) {
    Right2 = true;    
    }
    } // Bots
    if (scene === 4) { // Two Players
    background(0, 0, 0);
    fill(122, 122, 122);
    rect(5, 5, 390, 390);
    fill(0, 0, 255);
    stroke(255, 255, 255);
    rect(playerX, playerY, 25, 25);
    fill(255, 0, 0);
    rect(playerX2, playerY2, 25, 25);
    fill(238, 255, 0);
    rect(tokenX, tokenY, 10, 10);
    fill(0, 0, 255);
    text("Points: " + points, 10, 20);
    fill(255, 0, 0);
    text("Points: " + points2, 335, 20);
    if (playerX >= tokenX - 25 && playerX <= tokenX + 5 && playerY >= tokenY - 25 &&           playerY <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points += 1;
    playerX = 275;
    playerY = 275;
    }
     if (playerX2 >= tokenX - 25 && playerX2 <= tokenX + 5 && playerY2 >= tokenY - 25 &&           playerY2 <= tokenY + 5) {
    tokenX = random(5, 380);  
    tokenY = random(5, 380); 
    points2 += 1;
    playerX2 = 175;
    playerY2 = 275;
    }
    if (playerX2 >= playerX - 25 && playerX2 <= playerX && playerY2 >= playerY - 25 &&             playerY2 <= playerY) {
    scene = 6;    
    }
    keyPressed = function () {
    if (keyCode === UP) {
    Up2 = true;  
    }
    if (keyCode === DOWN) {
    Up2 = false;    
    }
    if (keyCode === RIGHT) {
    Right2 = true;    
    }
    if (keyCode === LEFT) {
    Right2 = false;    
    }
    if (keyCode === 87) {
    Up = true;  
    }
    if (keyCode === 83) {
    Up = false;    
    }
    if (keyCode === 68) {
    Right = true;    
    }
    if (keyCode === 65) {
    Right = false;    
    }
    };
    if (Up === true && playerY > 5) {
    playerY -= 2.5;    
    }
    if (Up === false  && playerY < 370) {
    playerY += 2.5;   
    }
    if (Right === true && playerX < 370) {
    playerX += 2.5;    
    }
    if (Right === false && playerX > 5) {
    playerX -= 2.5;    
    }
    if (Up2 === true && playerY2 > 5) {
    playerY2 -= 2.5;    
    }
    if (Up2 === false  && playerY2 < 370) {
    playerY2 += 2.5;   
    }
    if (Right2 === true && playerX2 < 370) {
    playerX2 += 2.5;    
    }
    if (Right2 === false && playerX2 > 5) {
    playerX2 -= 2.5;    
    }
    if (playerY === 370) {
    Up = true;    
    }
    if (playerY === 5) {
    Up = false;    
    }
    if (playerX === 370) {
    Right = false;   
    }
    if (playerX === 5) {
    Right = true;    
    }
    if (playerY2 === 370) {
    Up2 = true;    
    }
    if (playerY2 === 5) {
    Up2 = false;    
    }
    if (playerX2 === 370) {
    Right2 = false;   
    }
    if (playerX2 === 5) {
    Right2 = true;    
    }
    } // Two Players
    if (scene === 5) { // Death
    background(0, 0, 0);
    textSize(30);
    fill(255, 0, 0);
    text("Game Over", 130, 185);
    textSize(15);
    fill(255, 255, 255);
    text("Your Score was " + points, 145, 200);
    fill(0, 255, 0);
    rect(155, 350, 100, 50);
    fill(0, 0, 0);
    text("Home", 185, 380);
    mouseClicked = function () {
    if (mouseX > 150 && mouseX < 250 && mouseY > 350 && mouseY < 400) {
    Program.restart();    
    }
    };
    } // Death
    if (scene === 6) { // 2 Player Death
    background(0, 255, 0);
    fill(255, 255, 255);
    rect(155, 350, 100, 50);
    fill(0, 0, 0);
    text("Home", 185, 380);
    mouseClicked = function () {
    if (mouseX > 150 && mouseX < 250 && mouseY > 350 && mouseY < 400) {
    Program.restart();    
    }
    };
    if (points > points2) {
    fill(0, 0, 255);
    textSize(30);
    text("Blue Wins", 135, 180);
    textSize(15);
    text("Blue's Score: " + points, 150, 200);
    fill(255, 0, 0);
    text("Reds Score: " + points2, 160, 220); 
    
    }
    if (points2 > points) {
    fill(255, 0, 0);
    textSize(30);
    text("Red Wins", 135, 180);
    textSize(15);
    fill(0, 0, 255);
    text("Blue's Score: " + points, 150, 220);
    fill(255, 0, 0);
    text("Reds Score: " + points2, 150, 200); 
    
    }
    if (points2 === points) {
    fill(0, 0, 0);
    textSize(30);
    text("Ti", 185, 180);
    textSize(15);
    fill(0, 0, 255);
    text("Blue's Score: " + points, 150, 220);
    fill(255, 0, 0);
    text("Reds Score: " + points2, 150, 200); 
    
    }
    } // 2 Player Death
    if (scene === 7) {
    background(0, 0, 0);
    fill(255, 0, 0);
    rect(-1, 200, 401, 200);
    fill(0, 0, 255);
    rect(-1, -1, 402, 201);
    stroke(0, 0, 0);
    rect(175, 25, 50, 50);
    rect(175, 80, 50, 50);
    rect(120, 80, 50, 50);
    rect(230, 80, 50, 50);
    fill(255, 0, 0);
    rect(175, 265, 50, 50);
    rect(175, 320, 50, 50);
    rect(120, 320, 50, 50);
    rect(230, 320, 50, 50);
    fill(0, 0, 0);
    text("Up", 193, 55);
    text("Down", 185, 108);
    text("Left", 135, 108);
    text("Right", 240, 108);
    text("W", 193, 295);
    text("S", 195, 350);
    text("A", 140, 350);
    text("D", 250, 350);
    rect(0, 150, 400, 100);
    fill(255, 0, 0);
    rect(0, 0, 50, 50);
    fill(0, 0, 0);
    text("Home", 8, 27);
    fill(255, 255, 255);
    text("Classic", 25, 165);
    text("Two Players", 225, 165);
    text("Collect the small yellow squares to gain points. Don't hit the bigger purple squares.", 0, 175, 200, 200); 
    text("Collect the small yellow squares to gain points. Don't hit the other player. Player with the most points when one player dies wins.", 200, 175, 200, 200);
    stroke(255, 255, 255);
    line(200, 150, 200, 250);
    mouseClicked = function () {
    if (mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
    scene = 2;    
    }
    };
    } // Controls
};
