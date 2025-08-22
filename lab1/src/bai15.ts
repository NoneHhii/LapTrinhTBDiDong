import { Book } from "./bai6";
import { User } from "./bai7";

export class Library {
    books : Book[];
    user: User;

    constructor(book: Book, user: User) {
        this.user = user;
        this.books = [];
        this.books.push(book);
    }

    addBook(book : Book) : void {
        this.books.push(book);
    }

    showInfor() : void {
        console.log("User: " + this.user.getter() + "\n co nhung cuon sach: ");
        this.books.forEach((book) => console.log("- " + book.title));
        
    }
}