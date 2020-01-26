import React, { useState } from 'react';
import Header from '../Header/index';
import AutoCarrousel from '../AutoCarrousel/index';
import img1 from '../../images/1_table.jpg';
import img2 from '../../images/2_table.jpg';
import img3 from '../../images/3_table.jpg';

const items = [
	{
		image: img1,
	},
	{
		image: img2,
	},
	{
		image: img3,
	},
];

function Store(device) {
	const [index, setIndex] = useState(0);

	return (
		<>
			<Header />
			<AutoCarrousel
				items={items}
				index={index}
				setIndex={setIndex}
			/>
		</>
	);
}

export default Store;
