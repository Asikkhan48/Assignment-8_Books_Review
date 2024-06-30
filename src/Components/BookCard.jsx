import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg"



const BookCard = ({book}) => {

    const {id, bookName, author, image, review, totalPages, rating, category, tags,publisher, yearOfPublishing} = book;

    return (
        <div>
            <article className="flex flex-col dark:bg-gray-50 box-border shadow-lg p-5 bg-base-200 rounded-lg space-y-5
			border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30">

				<Link to={`/book/${book.id}`} className="">
					<img className="object-cover w-full h-52 dark:bg-gray-500" src={image || placeholderImage} />
				
				<p className="flex flex-col-2">{tags}</p>
				<div className="flex flex-col flex-1 p-6">
				
					<div className="mb-5">
                    <h3 className="flex-1 py-2 text-2xl font-bold leading-snug">{bookName}</h3>
                    <p> <span className="font-bold">By: </span> {author}</p>
                    </div>

                    <hr />

					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>{category}</span>
						<span>{rating}</span>
					</div>
				</div>
				</Link>
			</article>
        </div>
    );
};

export default BookCard;