import tw, { styled } from 'twin.macro';

export const BooksWrapper = styled.div`
	background: rgba(10, 10, 10, 0.2);
	${tw`w-2/3 mx-auto justify-center items-center p-6 text-gray-800 mb-0`};
`;

export const Books = tw.ul``;

export const Book = tw.li`cursor-pointer`;

export const BookTitle = tw.div`bg-purple-400 text-2xl p-4 hover:line-through hover:text-base hover:text-gray-600 w-5/6 rounded-md mx-auto font-semibold text-xl my-2 transition-all duration-200`;

export const BookAuthor = tw.h2`text-base font-medium`;

export const EmptyBooks = tw.div`font-semibold text-3xl text-center p-12`;

export const FormWrapper = tw.div`w-2/3 mx-auto p-2 mt-0 bg-white`;

export const Form = tw.form`shadow-md px-8 pt-6 pb-8 mb-4`;

export const Label = tw.label`block text-gray-700 text-sm font-bold mb-2 capitalize`;

export const Input = styled.input`
	${tw`shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight
  hocus:border-purple-600 hocus:outline-none`}
`;

export const FormFooter = tw.button`w-1/4 bg-purple-700 font-bold hover:bg-purple-400 hover:text-gray-900 hover:shadow-inner text-center text-white text-base py-2 px-4 rounded focus:outline-none mt-2`;
