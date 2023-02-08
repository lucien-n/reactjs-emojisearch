import { useState } from 'react';

export default function ToggleVisibility(props) {
	return props.show && props.children;
}
