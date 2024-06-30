import { useEffect, useState } from "react";
import { getBooks } from "../Utils/Index";
import BookCard from "../Components/BookCard";


const Bookmark = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const storedBooks = getBooks()
        setBooks(storedBooks)
    }, [])

    return (
        
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 p-7 box-border shadow-lg">
			{books.map(book => <BookCard book={book} key={book.id}></BookCard>)}
		</div>
    );

};

export default Bookmark;