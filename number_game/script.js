function GAME() {
    
    // по id ищутся 6 элементов и инициализируются 6 переменных
    let idElems = ['name', 'resuser', 'rescomp', 'usernum', 'compnum', 'btn'];
    let [name, resuser, rescomp, usernum, compnum, btn] = idElems.map(
        id => document.getElementById(id)
    );
    
    // имя будет, или User, или то, что введёте в поле prompt
    name.innerHTML = prompt('Введите ваше имя') || 'User';
    
    // функция возвращает случайное число от 1 до 10 включительно
    let rand = () => Math.ceil(Math.random() * 10);
    


//Стрелочные функции помогают существенно сократить код
//var a = a.map( s => s.length );
//выглядит куда лучше, чем
//var a = a.map(function(s){ return s.length } );

  
    // функция устанавливает innerHTML в "0" 4-ём элементам
    function clear() {
        return [resuser, rescomp, usernum, compnum].forEach(e => e.innerHTML = 0);
    }
  
    //forEach() — Выполняет указанную функцию для каждого элемента массива. map() — создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

  
    // инициализируются 5 переменных со значением 0
    // аналог let rU = 0; let rC = 0; ... и т.д.
    // let [rU, rC, nU, nC, count] = [...Array(5).fill(0)];
    let rU = 0;let rC = 0;let nU = 0;let nC = 0;let count = 0;
    // переменная для будущего месаджа
    let mess = '';
    
    // главная функция "игры". даётся 3 попытки
    // балл тому, у кого число больше. если числа равны - обоим по *баллу 
    function run(){
        
        // рандомные числа для innerHTML элементов и переменным nU/nC
        usernum.innerHTML = nU = rand();
        compnum.innerHTML = nC = rand();
        
        if(nU > nC) ++rU; // если больше у юзера, то балл юзеру
        else if(nU < nC) ++rC; // если у юзера меньше, то балл "компу"
        else { // иначе - обоим по баллу 
            ++rU;
            ++rC;
        }
        
        // баллы на "табле"
        resuser.innerHTML = rU;
        rescomp.innerHTML = rC;     
        
        // счётчик кликов
        count++;
        
        if(count === 3) { // если 3 клика
            
            // setTimeout для небольшой задержки,
            // чтоб confirm не перекрывал вывод последнего результата
            setTimeout(() => {
                
                // что будет в меседже, если сравнить баллы
                if(rU > rC) mess = 'Вы выиграли';
                else if(rU < rC) mess = 'Вы проиграли';
                else mess = 'Ничья';
                
                // confirm: результат и вопрос...
                // если ДА, то заново
                // если НЕТ, то обработчик клика удаляется и ... конец
                if(!confirm(`${mess}! Ещё раз?`)) btn.removeEventListener('click', run);
                //removeEventListener() Удаляет обработчик события
                // "очистка" переменных
                rU = rC = nU = nC = count = 0;
                clear();
                
            }, 100);
        }           
    };
    
    // назначение для кнопки btn обработчика события click
    btn.addEventListener('click', run);
  //addEventListener — это способ зарегистрировать обработчик события, описанный в документации W3C DOM. Вот список преимуществ его использования: Позволяет добавлять множество обработчиков для одного события.
};
 
