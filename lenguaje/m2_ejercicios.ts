// Head
const head_TS = <T>([firstElement]: T[]): T | undefined => firstElement;

// Tail
const tail_TS = <T>([, ...restOfElements]: T[]): T[] => restOfElements;

// Init
const init_TS = <T>(array: T[]): T[] => array.slice(0, array.length - 1);

// Last
const last_TS = <T>(array: T[]): T | undefined => array[array.length - 1];

// ARRAY CONCAT
const concat_TS = <T>(a: T[], b: T[]): T[] => [...a, ...b];

// Optional
const concatOptional_TS = <T>(a: T[], b: T[], ...rest: T[][]): T[] => [...a, ...b, ...rest.flat()];

// CLONE MERGE
const clone_TS = <T extends object>(source: T): T => ({ ...source });

const merge_TS = <T extends object, U extends object>(source: T, target: U): T & U => ({ ...target, ...source });

// READ BOOKS
const isBookRead_TS = (books: { title: string; isRead: boolean }[], titleToSearch: string): boolean =>
  books.some((book) => book.title === titleToSearch && book.isRead);

// SLOT MACHINE
class SlotMachine {
  private counter: number;

  constructor() {
    this.counter = 0;
  }

  play(): void {
    this.counter++;
    const randomNumbers: boolean[] = Array.from({ length: 3 }, () => Math.random() >= 0.5);
    if (randomNumbers.every((number) => number)) {
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
      this.counter = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}
