export default function Emoji({ data }) {
	if (data == null) return <p>Searching</p>;
	return (
		<div>
			<h1>{data.slug}</h1>
			<p>{data.character}</p>
		</div>
	);
}
