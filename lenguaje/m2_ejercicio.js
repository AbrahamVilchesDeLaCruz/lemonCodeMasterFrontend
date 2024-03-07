//ARRAY OPERATORS
//Head
const head = ([firstElement]) => firstElement;

//Tail
const tail = ([, ...restOfElements]) => restOfElements;

//Init
const init = (array) => array.slice(0, array.length - 1);

//Last
const last = (array) => array[array.length - 1];

//ARRAY CONCAT
const concat = (a, b) => [...a, ...b];

//optional
const concatOptional = (a, b, ...rest) => [...a, ...b, ...rest.flat()];

//CLONE MERGE
const clone = (source) => ({ ...source });

const merge = (source, target) => ({ ...target, ...source });

//READ BOOKS
const isBookRead = (books, titleToSearch) => books.some((book) => book.title === titleToSearch && book.isRead);

//SLOT MACHINE
class SlothMachine {
    constructor() {
        this.counter = 0;
    }

    play() {
        this.counter++;
        const randomNumbers = Array.from({ length: 3 }, () => Math.random() >= 0.5);
        if (randomNumbers.every((number) => number)) {
            console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
            this.counter = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}
