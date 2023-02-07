import { useState } from 'react';

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

	const cooldown_ms = 1_000;
	let last_request = 0;

	const execute = async (search) => {
		if (Date.now() - cooldown_ms < last_request) return false;
		last_request = Date.now();

		try {
			setIsLoading(true);
			const emoji = await searchEmoji(search);
			setData(emoji);
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
