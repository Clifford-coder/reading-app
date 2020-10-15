import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { NavbarWrapper, Title, Subheading } from './styling';

export default () => {
	const { books } = useContext(BookContext);
	return (
		<NavbarWrapper>
			<Title>LordCliff's Reading App</Title>
			{books.length === 1 ? (
				<Subheading>{`You currently have a total of ${books.length} book to read`} </Subheading>
			) : (
				<Subheading>{`You currently have a total of ${books.length} books to read`} </Subheading>
			)}
		</NavbarWrapper>
	);
};
