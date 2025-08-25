"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor(book, user) {
        this.user = user;
        this.books = [];
        this.books.push(book);
    }
    addBook(book) {
        this.books.push(book);
    }
    showInfor() {
        console.log("User: " + this.user.getter() + "\n co nhung cuon sach: ");
        this.books.forEach((book) => console.log("- " + book.title));
    }
}
exports.Library = Library;
