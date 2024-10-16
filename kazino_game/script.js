function setGameRound () 
{
    const imagesSrc = ['1.png','2.png','3.png',];
    let checkMatch = false;
    document.querySelectorAll('.row').forEach(row=>{
        let checkRowSet = new Set();        
        row.querySelectorAll('img').forEach(img=>{
            let imageSrc = imagesSrc[Math.floor(Math.random() * imagesSrc.length)];
            img.setAttribute('src', imageSrc);
            if (!checkMatch) {
                checkRowSet.add(imageSrc);
            }
        });
        if (!checkMatch) {
            if (checkRowSet.size === 1) {
                checkMatch = true;
            }
        }
    });
    return checkMatch;
}
let name = prompt('Введите ваше имя')||"Username";
document.getElementById('name').innerText = name;
let currentCount = 0;
let win = false;
document.querySelector('button').addEventListener('click', e=>{
 
    if (win) {
        alert('Вы уже выиграли');
        return;
    }
 
    if (currentCount >= 3) {
        alert('Больше нет попыток');
      return;
      
    }
    currentCount++;
    document.getElementById('count').innerText = currentCount;
    let result = setGameRound();
    if (result) {
        win = true;
        setTimeout(_=>alert('Вы выиграли'), 100);
    }

});
