import { useState } from 'react';

const cooldown_ms = 200;
let last_request = 0;

const searchEmoji = async (slug) => {
	const response = await fetch(
		`https://emoji-api.com/emojis?access_key=73d1ed71f59b9ca71f6d0963a496893742efa389&search=${slug}`,
		{
			method: 'GET',
		}
	);

	const responseData = await response.json();

	return responseData;
};

export default function useSearchEmoji() {
	// eslint-disable-next-line
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);
	let last_search = '';

	const execute = async (search) => {
		if (Date.now() - cooldown_ms < last_request && last_search !== '') {
			if (last_search === '') {
				last_search = search;
				setTimeout(() => {
					execute(search);
				}, 220);
			}
			return;
		}
		last_request = Date.now();

		try {
			console.log(search);
			setIsLoading(true);
			const emoji = await searchEmoji(search);
			setData(emoji);
			last_search = '';
			return emoji || {};
		} catch (error) {
			setError(error);
			setIsLoading(false);
			throw error;
		}
	};

	return {
		error,
		data,
		setData,
		execute,
	};
}
