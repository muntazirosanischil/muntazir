//write first method
function sleep_in(weekday, vacation) {
    return !weekday || vacation;
}
/* legendary ^^ */

//write second method
function monkey_trouble(a_smile, b_smile) {
    return (a_smile && b_smile) || (a_smile &&  b_smile) || (!a_smile && !b_smile);
}

function string_times(string, num){
    var bigSaladString = "";
    for(var i = 0; i < num; i++){
        bigSaladString += string;
    }
    return bigSaladString;
}

function front_times(string, num) {
    var word = "";
    var firstThree = string.substring(0, 3);
    for (var i = 0; i < num; i++) {
    word += firstThree;
    }
    return word;
}

function string_bits(string){
    var word = "";
    for(var i = 0; i < string.length; i += 2){
        word += string.charAt(i);
    }
    return word;
}

function caughtSpeeding(speed, birthday) {
    if(birthday == true){
        speed = speed - 5;
    }
    if(0 < speed && speed <= 60){
        speed = 0;
    }
    if(60 < speed && speed <= 80){
        speed = 1;
    }
    if(80 <= speed){
        speed = 2;
    }
    return speed;
}

function fizz_buzz(x){

    var buzz = "Buzz";
    var fizz = "Fizz";
    var both = "FizzBuzz";
    var num = x + "!";
    if(x % 3 == 0 && x % 5 == 0) {
        return both;
    }
    if(x % 3 == 0){
        return fizz;
    }else if(x % 5 == 0){
        return buzz;
    }else{
        return num;
    }
}

function teaParty(candy, tea) {
    if (candy < 5 || tea < 5) {
        return 0;
    }else if(candy >= (tea * 2) || tea >= (candy * 2)) {
        return 2;
    }else if (candy >= 5 && tea >= 5) {
        return 1;
    }
}

function blackjack(x, y){
    if(x > 21 && y > 21){
        return 0;
    }else if(x > 21 && y <= 21){
        return y;
    }else if(x <= 21 && y > 21){
        return x;
    }else if(x < y){
        return y;
    }else{
        return x;
    }
}

function loneSum(a, b ,c){
    if(a == c && a == b){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(b == c){
        return a;
    }
    if(a == c){
        return b;
    }
    return a + b + c;
}


/*if(candy >= (tea * 2) || tea >= (candy * 2)){
    return 2;
}*/

//write third method
//function runs on click and outputs tesfunction string_bits(string){
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);

    //test third method, etc

}
