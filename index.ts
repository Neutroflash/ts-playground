/*const book = { title: "Hamlet", author: "Shakespare" }*/

let book: {
    title: string;
    author: string;
    web?: string;
}

book = { title: "Hamlet", author: "Shakespare"}
book.web = "Hamlet.book"

// let student: { name: string; age: number; }

function printBook (book: {title: string; author: string}) {
    console.log(book.author)
}

const phoneNumbers: {
    [k: string]: { code: string; number: string}
} = {};

phoneNumbers.fax

const countries = ["PE", "MX", "CO", "CL"]
const evenNumbers = [2,4,6,8]
const tasks = [{ title: "Estudiar"}, { title: "Dormir"}]
const fruits: string[] = []

const student: readonly [string, number, boolean] = ["Testino", 25, true ]

let prueba: string | number

prueba = 23
prueba = "jajaja"

type Impares = 1 | 3 | 5 | 7 | 9
type HastaCinco = 1 | 2 | 3 | 4 | 5
let numero: Impares | HastaCinco

numero = 1
numero = 3
numero = 4
numero = 9

function getUser() {
    const success = [
        "success",
        { name: "Testino", email: "testino@mail.com"}
    ] as const;

    const error = ["error", new Error("Something went wrong!")] as const

    if (Math.random() > 0.5) {
        return success;
    } else {
        return error;
    }
}

const [result, data] = getUser()

result
data