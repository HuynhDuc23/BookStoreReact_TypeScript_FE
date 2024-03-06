import React from "react";
import Book from "./../../models/Book";

const List : React.FC = () => {
    const books : Book[] = [
        {
            id : 1 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 2 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 3 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 4 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 5 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 5 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        },
        {
            id : 6 ,
            title : 'Sách Hay',
            description : 'Đây Là Sách Hay',
            origianlPrice: 100,
            price : 10 ,
            imageUrl : 'https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/07/hinh-dep.jpg.webp'
        }
    ]
    return (
        <>
            <div className="container">
            <div className="row mt-4">
                {
                    books.map((book) => (
                            <BookProps key={book.id}  book={book} />
                        )
                    )
                }
            </div>
        </div>
        </>
    )
}
export default List ;