let name = prompt('Привет! Как тебя зовут?');

while (name == '' || name == null) {
    name = prompt('Привет! Как тебя зовут?');
}

alert(name + ', я загадал число от 1 до 100. Поробуй его отгадать за наименьшее количество попыток. После каждой попытки я скажу "мало" или "много" или "угадал".');

let number = random(100);
let guess = prompt('Какое число я загадал?');
let numberOfGuesses = 0;

while (guess != number) {
    if (guess > number) {
        guess = prompt('Много. Попробуй еще раз');
        numberOfGuesses = numberOfGuesses + 1;
    }
    if (guess < number) {
        guess = prompt('Мало. Попробуй еще раз');
        numberOfGuesses = numberOfGuesses + 1;
    }
}

alert('Ты угадал! Это число ' + number + '. Тебе понадобилось ' + numberOfGuesses + ' попыток.');