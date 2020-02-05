import React, { useState } from 'react';
import Header from '../Header/index';
import AutoCarrousel from '../AutoCarrousel/index';
import Footer from '../Footer/index';
import Card from '../Card/index';
import CardLocation from '../CardLocation/index';
import PinGPS from '../PinGPS/index';
import img1 from '../../images/1_table.jpg';
import img2 from '../../images/2_table.jpg';
import img3 from '../../images/3_table.jpg';
import styles from './index.module.sass';

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

function Store({ device }) {
	const [index, setIndex] = useState(0);
	const { screenSize } = device;
	console.log(screenSize, device);
	return (
		<>
			<Header />
			<div className="flex flex-column items-center">
				<div
					className={`${styles.carrouselContainer}  ${styles[screenSize]} mt3 mb3 flex flex-column items-center`}
				>
					<AutoCarrousel
						device={device}
						items={items}
						index={index}
						setIndex={setIndex}
					/>
				</div>
				<Card />
				<CardLocation />
				<div
					className={` flex flex-row justify-between`}
					style={{ width: '92%' }}
				>
					<PinGPS />
					<PinGPS />
				</div>
				<div className={'mt5 h4'}></div>
				<Footer />
			</div>
		</>
	);
}

export default Store;
