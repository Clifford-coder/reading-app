import React from 'react';
import BookContextProvider from './context/BookContext';
import { Container, Navbar, BookList, NewBookForm } from './components';

function App() {
	return (
		<Container>
			<BookContextProvider>
				<Navbar />
				<BookList />
				<NewBookForm />
			</BookContextProvider>
		</Container>
	);
}

export default App;
