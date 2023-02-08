export default function Box(props) {
	return (
		<div
			className={
				'border h-full w-full font-semibold border-zinc-400 bg-black backdrop-blur-lg rounded-lg mx-auto ' +
				props.class
			}
		>
			{props.children}
		</div>
	);
}
