class Book {
    static instanceCount = 0
    title:string
    author:string
    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
        Book.instanceCount++;
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}`)
    };
    static displayinstanceCount(){
        console.log(`total instances created:${Book.instanceCount}`)
    }
}
// create an instances of book
let book1 = new Book("the book of healing", "ibn e sina");
let book2 = new Book("the book of knowledge", "al khwarizmi");


book1.displayDetails();
book2.displayDetails();
Book.displayinstanceCount()

// instance of Ebook

class EBook extends Book {
        fileSize:number;

    constructor(title:string, author:string, fileSize:number) {
        super(title, author);
        this.fileSize = fileSize;
    }

    displayDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}MB`);
    }
}

let myEBook = new EBook("The niche of lights", "al ghazali", 5);
myEBook.displayDetails();
Book.displayinstanceCount()