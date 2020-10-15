import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { BookDetails } from '../../components';
import { BooksWrapper, Books, EmptyBooks } from './styles';

export default () => {
	const { books } = useContext(BookContext);
	return books.length ? (
		<BooksWrapper>
			<Books>
				{books.map((book) => (
					<BookDetails key={book.id} book={book} />
				))}
			</Books>
		</BooksWrapper>
	) : (
		<EmptyBooks>
			You are currently not reading anything. Please add a book.<strong> Na reading de3 3y3 paa</strong>
		</EmptyBooks>
	);
};
