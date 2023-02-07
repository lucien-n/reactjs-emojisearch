import Box from './Box';

export default function Input({ onInput }) {
	return (
		<Box>
			<input
				type="text"
				className="w-full h-full border-none text-center outline-none bg-transparent p-2"
				onInput={(e) => onInput(e.target.value)}
			/>
		</Box>
	);
}
