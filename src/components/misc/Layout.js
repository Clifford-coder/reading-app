import tw, { styled } from 'twin.macro';

export const Container = styled.main`
	background: linear-gradient(
		90deg,
		rgba(131, 58, 180, 1) 4%,
		rgba(133, 20, 170, 1) 30%,
		rgba(69, 100, 252, 1) 77%,
		rgba(69, 252, 238, 1) 100%
	);
	${tw`h-full w-screen pt-6`}
`;
