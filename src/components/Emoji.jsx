import Box from './Box';

function capitalize(string) {
	let words = string.split(' ');
	let result = '';
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		result +=
			word.charAt(0).toUpperCase() + word.substring(1, word.length) + ' ';
	}
	return result.substring(0, result.length - 1);
}

function shorten(string) {
	return string.substring(0, string.length > 16 ? 16 : string.length) + '...';
}

export default function Emoji({ data, onClick }) {
	if (data == null) return <p>Searching</p>;
	return (
		<div
			className="w-24 h-24 md:w-32 md:h-36 my-3 mx-auto hover:cursor-pointer"
			onClick={() => {
				onClick(data);
			}}
		>
			<Box>
				<div className="relative h-full p-2">
					<div
						className="text-3xl md:text-6xl text-center hover:cursor-pointer"
						onClick={() => {
							navigator.clipboard.writeText(data.character);
						}}
					>
						{data.character}
					</div>
					<div className="absolute bottom-0 left-0 right-0">
						<p className="text-center text-md font-semibold p-1">
							{shorten(capitalize(data.unicodeName))}
						</p>
					</div>
				</div>
			</Box>
		</div>
	);
}
