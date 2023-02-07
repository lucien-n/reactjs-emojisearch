export default function Input({ onInput }) {
	return (
		<div>
			<input type="text" onInput={(e) => onInput(e.target.value)} />
		</div>
	);
}
