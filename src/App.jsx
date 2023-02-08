import { useState } from 'react';
import Emoji from './components/Emoji';
import EmojiCard from './components/EmojiCard';
import Input from './components/Input';
import ToggleVisibility from './components/ToggleVisibility';
import useSearchEmoji from './hooks/useSearchEmoji.js';

export default function App() {
	// eslint-disable-next-line
	const { isLoading, data, execute } = useSearchEmoji();
	const [focusedEmoji, setFocusedEmoji] = useState({});
	let showEmojiCard = false;
	let search_in_queue = false;

	const getEmoji = async (value) => {
		const success = await execute(value);
		if (!success && !search_in_queue) {
			search_in_queue = true;
			setTimeout(() => {
				search_in_queue = false;
				getEmoji(value);
			}, 220);
		}
	};

	const handleOnInput = (value) => {
		getEmoji(value);
	};

	return (
		<div className="w-full h-full backdrop-blur-xl">
			{showEmojiCard && (
				<EmojiCard
					data={focusedEmoji}
					onClick={() => (showEmojiCard = false)}
				></EmojiCard>
			)}
			<div className="w-full xl:w-1/2 h-full text-white mx-auto">
				<div className="h-14 mt-10">
					<Input onInput={handleOnInput} />
				</div>
				<br />
				<div className="grid grid-cols-3 md:grid-cols-5 grid-rows-3">
					{data != null &&
						data.slice(0, 20).map((emoji_data) => (
							<Emoji
								data={emoji_data}
								key={emoji_data.slug}
								onClick={(data) => {
									setFocusedEmoji(data);
									showEmojiCard = true;
								}}
							/>
						))}
				</div>
			</div>
		</div>
	);
}
