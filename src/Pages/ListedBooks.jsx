import { useEffect, useState } from "react";
import BookCard from "../Components/BookCard";

const ListedBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch("books.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    return (
        <div>
            
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Books</h2>
		</div>

		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 p-7 box-border shadow-lg">
			
			{books.map(book => <BookCard book={book} key={book.id}></BookCard>)}
		</div>
	</div>
</section>

        </div>
    );
};

export default ListedBooks;