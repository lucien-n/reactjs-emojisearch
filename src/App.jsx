import Emoji from './components/Emoji';
import Input from './components/Input';
import useSearchEmoji from './hooks/useSearchEmoji.js';

export default function App() {
	// eslint-disable-next-line
	const { isLoading, data, setData, execute } = useSearchEmoji();

	const handleOnInput = async (value) => {
		execute(value);
	};

	return (
		<div>
			<Input onInput={handleOnInput} />⚡
			{data != null &&
				data
					.slice(0, 10)
					.map((emoji_data) => (
						<Emoji data={emoji_data} key={emoji_data.slug} />
					))}
		</div>
	);
}
