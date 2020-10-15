import React, { useContext } from 'react';
import { Book, BookAuthor, BookTitle } from './styles';
import { BookContext } from '../../context/BookContext';

export default ({ book }) => {
	const { dispatch } = useContext(BookContext);
	return (
		<Book onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
			<BookTitle>
				{book.title}
				<BookAuthor>By {book.author}</BookAuthor>
			</BookTitle>
		</Book>
	);
};
