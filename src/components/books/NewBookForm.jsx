import React, { useState, useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Form, Label, Input, FormWrapper, FormFooter } from './styles';

export default () => {
	const { dispatch } = useContext(BookContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	return (
		<FormWrapper>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch({ type: 'ADD_BOOK', book: { title, author } });
					setTitle('');
					setAuthor('');
				}}
			>
				<div style={{ marginBottom: '0.9rem' }}>
					<Label>Enter the title of the book :</Label>
					<Input
						type="text"
						placeholder="Title of the Book"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<Label>Enter the author of the book :</Label>
				<Input
					type="text"
					placeholder="Title of the Book"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
					required
				/>
				<FormFooter>
					{/* <button style={{ fontWeight: 'bold' }} type="submit"> */}
					add Book
					{/* </button> */}
				</FormFooter>
			</Form>
		</FormWrapper>
	);
};
