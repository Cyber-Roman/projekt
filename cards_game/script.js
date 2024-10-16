//All Dom elements for user
let userName = document.getElementById('user-name');
let setUserScore = document.getElementById('numberOfWinUser');
let setUserCard = document.getElementById('User_card');
let button = document.getElementById('button');
//All dom for computer
let setComputerScore = document.getElementById('numberOfWinComputer');
let setPcCard = document.getElementById('Computer_card');

let userScore = 0;
let computerScore = 0;

let cards = {
    6: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/cl6.png'>",
    7: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/cl7.png'>",
    8: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/cl8.png'>",
    9: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/cl9.png'>",
    10: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/cl10.png'>",
    1: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/clA.png'>",
    2: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/clJ.png'>",
    3: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/clK.png'>",
    4: "<IMG src='file:///C:/Users/Sir%20BigBoy/Desktop/PROJEKT/cards_game/img/clQ.png'>"
};


let array = [1, 2, 3, 4, 6, 7, 8, 9, 10];

function setAllScore() {
    setComputerScore.value = computerScore;
    setUserScore.value = userScore;
}
function pickRandomNumber() {
    return array[Math.floor(Math.random() * array.length)];
}
function SetName() {
    let setUserName = prompt("Введите ваше имя: ")|| 'User';
    if (setUserName.length == 0 || setUserName.length == 1) {
        alert("Enter correct name");
        return 0;
    }
    return userName.value = "Your name: " + setUserName;
}

while (userName.value.length === 0) {
    SetName();
}

function getScore(randomUserNumber, randomPcNumber) {
    setUserCard.innerHTML = cards[randomUserNumber];
    setPcCard.innerHTML = cards[randomPcNumber];

    console.log("User" + randomUserNumber);
    console.log("Pc" + randomPcNumber);
    if (randomUserNumber > randomPcNumber) {
        userScore++;
        setUserScore.value = userScore;
        return;
    }

    if (randomUserNumber == randomPcNumber){
        userScore++;
        computerScore++;
        setUserScore.value = userScore;
        setComputerScore.value = computerScore;
        return;
    }

    computerScore++;
    setComputerScore.value = computerScore;
    return;
}

function confirmation(check) {
    if (check) {
        userScore = 0;
        computerScore = 0;
        setAllScore();

        return;
    } else {
        checker = false;
        return;
    }
}

function checkTheWinner() {
    let check;
    if (userScore === 3) {
        check = confirm("Player won computer");
        confirmation(check);
    }
    if (computerScore === 3) {
        check = confirm("Player lost to a computer");
        confirmation(check);
    }

}

setAllScore();

let checker = true;

button.onclick = () => {
    if (checker) {
        getScore(pickRandomNumber(), pickRandomNumber());
        window.setTimeout(checkTheWinner, 50);
    }
}
function back() {
    location.reload();
}
