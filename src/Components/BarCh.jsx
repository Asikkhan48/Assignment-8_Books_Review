
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Rectangle, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      "id": "1",
      "bookName": "1984",
      "author": "George Orwell",
      "image": "https://i.ibb.co/y4xZgHr/1.jpg",
      "review": "A dystopian classic that remains relevant.",
      "totalPages": 328,
      "rating": 4.5,
      "category": "Fiction",
      "tags": ["Dystopian", "Political"],
      "publisher": "Penguin Books",
      "yearOfPublishing": 1949
    },
    {
      "id": "2",
      "bookName": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "image": "https://i.ibb.co/3TMGLjK/2.jpg",
      "review": "A timeless exploration of morality and prejudice.",
      "totalPages": 336,
      "rating": 4.8,
      "category": "Fiction",
      "tags": ["Classic", "Legal Drama"],
      "publisher": "Harper Perennial Modern Classics",
      "yearOfPublishing": 1960
    },
    {
      "id": "3",
      "bookName": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "image": "https://i.ibb.co/3RS3stY/3.jpg",
      "review": "A cautionary tale about the dangers of censorship.",
      "totalPages": 249,
      "rating": 4.4,
      "category": "Fiction",
      "tags": ["Dystopian",  "Science Fiction"],
      "publisher": "Ballantine Books",
      "yearOfPublishing": 1953
    },
    {
      "id": "4",
      "bookName": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "image": "https://i.ibb.co/k6pwX.jpg",
      "review": "An insightful portrayal of teenage angst.",
      "totalPages": 277,
      "rating": 4.1,
      "category": "Fiction",
      "tags": ["Coming of Age",  "Literary Fiction"],
      "publisher": "Little, Brown and Company",
      "yearOfPublishing": 1951
    },
    {
      "id": "5",
      "bookName": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "image": "https://i.ibb.co/dMWs0xM/5.jpg",
      "review": "A delightful adventure for all ages.",
      "totalPages": 310,
      "rating": 4.7,
      "category": "Fiction",
      "tags": ["Fantasy", "Adventure"],
      "publisher": "Houghton Mifflin Harcourt",
      "yearOfPublishing": 1937
    },
    {
      "id": "6",
      "bookName": "Brave New World",
      "author": "Aldous Huxley",
      "image": "https://i.ibb.co/Yk89WdX/6.jpg",
      "review": "An unsettling vision of a future society.",
      "totalPages": 288,
      "rating": 4.3,
      "category": "Fiction",
      "tags": ["Dystopian", "Science Fiction"],
      "publisher": "Harper Perennial Modern Classics",
      "yearOfPublishing": 1932
    },
    {
      "id": "7",
      "bookName": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "image": "https://i.ibb.co/dpBCb3Z/7.jpg",
      "review": "A captivating portrayal of the Jazz Age.",
      "totalPages": 180,
      "rating": 4.6,
      "category": "Fiction",
      "tags": ["Classic", "Romance"],
      "publisher": "Scribner",
      "yearOfPublishing": 1925
    },
    {
      "id": "8",
      "bookName": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "image": "https://i.ibb.co/P5MRGjB/8.jpg",
      "review": "A dark and provocative exploration of vanity and morality.",
      "totalPages": 254,
      "rating": 4.2,
      "category": "Fiction",
      "tags": ["Gothic", "Philosophical"],
      "publisher": "Vintage Classics",
      "yearOfPublishing": 1890
    },
    {
      "id": "9",
      "bookName": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "image": "https://i.ibb.co/PMdnrbz/9.jpg",
      "review": "An epic fantasy masterpiece.",
      "totalPages": 1178,
      "rating": 4.9,
      "category": "Fiction",
      "tags": ["Fantasy", "Adventure"],
      "publisher": "Ballantine Books",
      "yearOfPublishing": 1954
    },
    {
      "id": "10",
      "bookName": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "image": "https://i.ibb.co/WFJxdMR/10.jpg",
      "review": "A thought-provoking blend of science fiction and war narrative.",
      "totalPages": 275,
      "rating": 4.5,
      "category": "Fiction",
      "tags": ["War", "Metafiction"],
      "publisher": "Dial Press Trade Paperback",
      "yearOfPublishing": 1969
    }
  ];
  
const BarCh = () => {
    return (
        <div>
            <>
            <div>
                <BarChart width={1200} height={350} data={data}>
                    
                    <XAxis dataKey="bookName"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                     <Bar dataKey="totalPages" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                </BarChart>
            </div>
        </>
        </div>
    );
};

export default BarCh;