import toast from "react-hot-toast";

export const getBooks = () => {
    let books = [];
    const storedBooks = localStorage.getItem("books")
    if (storedBooks) {
        books = JSON.parse(storedBooks)
    }
    return books
}

// Save
export const saveBook = book => {
    let books = getBooks()
    const isExit = books.find(b => b.id === book.id)
    if (isExit) {
        return toast.error("Already Read!")
    }
    books.push(book)
    localStorage.setItem("books", JSON.stringify(books))
    toast.success("Book Read Successfully!")
}

// delete
export const deleteBook = id => {
    let books = getBooks()
    const remaining = books.filter(b => b.id !== id)
    localStorage.setItem("books", JSON.stringify(remaining))
    toast.success("Book Removed from List")
}