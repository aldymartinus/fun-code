const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const releaseYear = document.getElementById("release-year");
const bookStatus = document.getElementById("book-status");
const bookForm = document.getElementById("book-input");
const buttonCancel = document.getElementById("buttonCancel");
const buttonOK = document.getElementById("buttonOK");
const searchBar = document.getElementById("search-bar");
const modalContainer = document.querySelector(".modal-container");
const STORAGE_KEY = "BOOK_DETAILS";
let bookList = null;
let targetBook = null;
let booksArr = [];

isDataExist();
renderList();

bookForm.addEventListener("submit", (event) => {
    saveBookDetails();
    event.preventDefault();
});

buttonCancel.addEventListener('click',()=>{
    modalContainer.style.display = "none";
});

searchBar.addEventListener("keyup",()=>{
    bookList.forEach((book)=>{
        let title = book.children[1].innerText;
        
        if (title.toLowerCase().indexOf(searchBar.value) != -1) {
            book.style.display = '';
        }else{
            book.style.display = 'none';
        };
    });
});

buttonOK.addEventListener('click',()=>{
    removeBook(targetBook);
});

function isStorageExist() {
    return typeof (Storage) !== undefined
};

function saveBookDetails() {
    isDataExist();
    booksArr.unshift(createBookObj());
    localStorage.setItem(STORAGE_KEY,JSON.stringify(booksArr));
    renderList();
    bookForm.reset();
};

function isDataExist(){
    if(localStorage.getItem(STORAGE_KEY) !== null){
        return booksArr  = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } else {
        return booksArr = [];
    }
}

function renderList(){
    const unreadList = document.getElementById("unread-list");
    const readList = document.getElementById("read-list");

    unreadList.innerHTML = '';
    readList.innerHTML = '';

    booksArr.forEach((book)=>{
    const idSpan = document.createElement('span');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const yearPara = document.createElement('p');
    const list = document.createElement('li');
    const div = document.createElement("div");
    const buttonDone = document.createElement("button");
    const deleteBook = document.createElement("button");
    
    div.classList.add("list-action-button");

    buttonDone.innerText = book.isComplete === true ? "Belum Dibaca" : "Selesai Dibaca";
    buttonDone.setAttribute("id","bookIsDone");
    deleteBook.setAttribute("id","deleteBook");
    deleteBook.innerText = "Hapus Buku";

    div.append(buttonDone);
    div.append(deleteBook);
    
    idSpan.innerText = book.id;
    idSpan.style.display = "none";
    titlePara.innerText = book.title;
    titlePara.setAttribute("id","title");
    authorPara.innerText = `Penulis: ${book.author}`;
    authorPara.setAttribute("id","author");
    yearPara.innerText = `Tahun: ${book.year}`;
    yearPara.setAttribute("id","year");

    list.classList.add("book-list");
    list.append(idSpan);
    list.append(titlePara);
    list.append(authorPara);
    list.append(yearPara);
    list.append(div);

    if(book.isComplete === true){
       return readList.appendChild(list);
    } else {
       return unreadList.appendChild(list);
    }
    })
    const deleteButton =  document.querySelectorAll("#deleteBook");
    const bookStatusToggleButton =  document.querySelectorAll("#bookIsDone");
    deleteButton.forEach(button => button.addEventListener("click",(e)=>{
        targetBook = e;
        window.scrollTo(0,0);
        modalContainer.style.display = "";
    }));
    bookStatusToggleButton.forEach(button => button.addEventListener("click",(e)=>{
        toggleBookStatus(e);
    }));
    bookList = document.querySelectorAll(".book-list");
};

function removeBook(element){
    const targetParent = element.target.parentElement.parentElement;
    const targetId = targetParent.firstChild.textContent;
    const idList = booksArr.map(x => x.id);
    const targetIndex = idList.indexOf(Number(targetId));
    booksArr.splice(targetIndex,1);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(booksArr));
    modalContainer.style.display = "none";
    renderList();
}

function toggleBookStatus(element){
    const targetParent = element.target.parentElement.parentElement;
    const targetId = targetParent.firstChild.textContent;
    const idList = booksArr.map(x => x.id);
    const targetIndex = idList.indexOf(Number(targetId));

    booksArr[targetIndex].isComplete = !booksArr[targetIndex].isComplete;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(booksArr));
    renderList(); 
}

const createBookObj = ()=>{
    const book = {
        id: Date.now(),
        title: bookTitle.value,
        author: bookAuthor.value,
        year: Number.parseInt(releaseYear.value),
        isComplete: bookStatus.checked
    }
    return book
};

