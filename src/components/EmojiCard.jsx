import Box from './Box';

export default function EmojiCard({ data, onClick }) {
	return (
		<div
			className="absolute w-full h-full bg-zinc-900 opacity-80 backdrop-blur-lg flex z-30 hover:cursor-pointer"
			onClick={onClick}
		>
			<div className="w-1/2 h-2/3 mx-auto self-center">
				<Box class="z-50 hover:cursor-default">
					<p className="text-9xl text-center">{data.character}</p>
				</Box>
			</div>
		</div>
	);
}
