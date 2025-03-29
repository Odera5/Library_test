//obj constructor function
class book {
  constructor(name, author, pages, readstatus) {
    (this.name = name),
      (this.author = author),
      (this.pages = pages),
      (this.readstatus = readstatus);
  }
  favourite() {
    return `My favourite Book is ${this.name} written by ${this.author}`;
  }
}

let myLibrary = [];

//function to creat new books
function createNewBook(name, author, pages, readstatus) {
  newBook = new book(name, author, pages, readstatus);
  myLibrary.push(newBook);
}

const libraryContainer = document.getElementById("container");
const bookBtnContainer = document.createElement("div");
libraryContainer.appendChild(bookBtnContainer);
const myboooks = document.createElement("div");
libraryContainer.appendChild(myboooks);

let bookCount = 0;
//This funtion loops through the content in a library and display them
function display() {
  myLibrary.forEach((library) => {
    bookCount += 1;
    const counts = document.getElementById("bookCount");
    if (bookCount <= 1) {
      counts.textContent = `You have added ${bookCount} Book to your library`;
    } else {
      counts.textContent = `You have added ${bookCount} Books to your library`;
    }

    myboooks.classList.add("myboooks");
    const bookList = document.createElement("div");
    bookList.classList.add("bookList");
    const Bookname = document.createElement("h3");
    Bookname.classList.add("Bookname");

    bookList.appendChild(Bookname);
    const Bookauthor = document.createElement("h4");
    Bookauthor.classList.add("Bookauthor");
    bookList.appendChild(Bookauthor);
    const Bookpage = document.createElement("p");
    Bookpage.classList.add("Bookpage");
    bookList.appendChild(Bookpage);
    const Bookread = document.createElement("p");
    Bookread.classList.add("Bookread");
    bookList.appendChild(Bookread);
    myboooks.appendChild(bookList);
    Bookname.textContent = library.name;

    Bookauthor.textContent = library.author;
    Bookpage.textContent = library.pages;
    Bookread.textContent = library.readstatus;
    //Delete button for each of the books displayed
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";
    bookList.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      bookCount--;
      if (bookCount <= 1) {
        counts.textContent = `You have added ${bookCount} Book to your library`;
      } else {
        counts.textContent = `You have added ${bookCount} Books to your library`;
      }
      console.log(bookCount);
      bookList.removeChild(Bookname);
      bookList.removeChild(Bookauthor);
      bookList.removeChild(Bookpage);
      bookList.removeChild(Bookread);
      bookList.removeChild(deleteBtn);
      myboooks.removeChild(bookList);
      //bookBtnContainer.replaceChild(myboooks);
      //bookBtnContainer.removeChild(deleteBtn);
    });
  });
}

let nameInput;
let authorInput;
let pageInput;
let readInput;

let formVisible = false;
let submitEmptyData = true;
//const deleteBtn = document.createElement("button");
//container.appendChild()

//This funtion displays a form to fill, submit and then add new book to the list
function addBookBtn() {
  if (!formVisible) {
    const form = document.createElement("form");

    form.classList.add("form");
    container.appendChild(form);
    //This cancel button removes the form from displaying
    const cancelContainer = document.createElement("div");
    form.appendChild(cancelContainer);
    const cancel = document.createElement("button");
    cancel.textContent = "X";
    cancel.classList.add("cancel");
    cancel.addEventListener("click", () => {
      container.removeChild(form);
      formVisible = false;
    });
    const label1 = document.createElement("label");
    label1.textContent = "Book title:";
    const input1 = document.createElement("input");
    input1.classList.add("input1");
    label1.classList.add("label1");

    // input2.classList.add("input2");
    // input3.classList.add("input3");
    //input4.classList.add("input4");
    cancelContainer.appendChild(cancel);
    form.appendChild(label1);
    form.appendChild(input1);

    const label2 = document.createElement("label");
    label2.textContent = "Book author:";

    const input2 = document.createElement("input");
    input2.classList.add("input2");
    label2.classList.add("label2");
    form.appendChild(label2);
    form.appendChild(input2);

    const label3 = document.createElement("label");
    label3.textContent = "Book page:";
    const input3 = document.createElement("input");
    input3.classList.add("input3");
    label3.classList.add("label3");
    form.appendChild(label3);
    form.appendChild(input3);

    const label4 = document.createElement("label");
    label4.textContent = "Read Status:";
    const input4 = document.createElement("input");
    input4.classList.add("input4");
    label4.classList.add("label4");
    form.appendChild(label4);
    form.appendChild(input4);

    const submitContainer = document.createElement("div");
    submitContainer.classList.add("submitContainer");
    form.appendChild(submitContainer);
    const submitBtnn = document.createElement("button");
    submitBtnn.textContent = "Submit";
    submitBtnn.classList.add("submitBtnn");
    submitContainer.appendChild(submitBtnn);
    //submit button

    submitBtnn.addEventListener(
      "click",

      function submitBtn() {
        if (
          input1.value.trim() === "" ||
          input2.value.trim() === "" ||
          input3.value.trim() === "" ||
          input4.value.trim() === ""
        ) {
          event.preventDefault();
          alert("fill the empty space!");
          input1.focus();
        } else {
          nameInput = input1.value;
          authorInput = input2.value;
          pageInput = input3.value;
          readInput = input4.value;

          newBook = new book(nameInput, authorInput, pageInput, readInput);
          myLibrary.push(newBook);

          display();

          myLibrary = [];
          input1.value = "";
          input2.value = "";
          input3.value = "";
          input4.value = "";
        }
        event.preventDefault();
      }
    );
    formVisible = true;
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", addBookBtn);
