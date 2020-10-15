import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		//get the books in the localStorage first
		const localData = localStorage.getItem('books');
		//check for existing data in the local storage.
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);

	return <BookContext.Provider value={{ books, dispatch }}>{props.children}</BookContext.Provider>;
};

export default BookContextProvider;
