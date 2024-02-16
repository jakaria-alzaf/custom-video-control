import React, { useState, useRef } from 'react';

const DragComponent = () => {
	const [dragPercentage, setDragPercentage] = useState(0);
	const divARef = useRef(null);
	const divBRef = useRef(null);



	return (
		<div className="a border mx-auto my-10 w-[400px]" ref={divARef} onClick={handleMouseClick}>
			<div
				className="b cursor-pointer select-none text-xs"
				ref={divBRef}
				style={{
					width: `${dragPercentage * 100}%`, // Adjust the width to the new range
					backgroundColor: 'blue',
					transform: 'width',
					transition: 'transform',
					transitionDuration: '500ms',
				}}
			>
				Click me
			</div>
		</div>
	);
};

export default DragComponent;
