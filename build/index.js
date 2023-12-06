"use strict";
/*const book = { title: "Hamlet", author: "Shakespare" }*/
let book;
book = { title: "Hamlet", author: "Shakespare" };
book.web = "Hamlet.book";
// let student: { name: string; age: number; }
function printBook(book) {
    console.log(book.author);
}
const phoneNumbers = {};
phoneNumbers.fax;
const countries = ["PE", "MX", "CO", "CL"];
const evenNumbers = [2, 4, 6, 8];
const tasks = [{ title: "Estudiar" }, { title: "Dormir" }];
const fruits = [];
const student = ["Testino", 25, true];
let prueba;
prueba = 23;
prueba = "jajaja";
let numero;
numero = 1;
numero = 3;
numero = 4;
numero = 9;
function getUser() {
    const success = [
        "success",
        { name: "Testino", email: "testino@mail.com" }
    ];
    const error = ["error", new Error("Something went wrong!")];
    if (Math.random() > 0.5) {
        return success;
    }
    else {
        return error;
    }
}
const [result, data] = getUser();
result;
data;
