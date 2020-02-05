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
					<PinGPS
						caption={'SFC San Francisco'}
						locationURL={
							'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d788.5997274715365!2d-122.42155437080075!3d37.75724365902904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3e81e82b0f%3A0xa612d5d09329a4a4!2s983%20Valencia%20St%2C%20San%20Francisco%2C%20CA%2094110%2C%20USA!5e0!3m2!1sen!2smx!4v1580881668837!5m2!1sen!2smx'
						}
					/>
					<PinGPS
						caption={'Naku Store Tijuana'}
						locationURL={
							'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.9365846721744!2d-117.12072917080998!3d32.532921129477614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94ba3d1308817%3A0x12206d0ce9b73e95!2sIntegra%20Venture!5e0!3m2!1sen!2smx!4v1580882747013!5m2!1sen!2smx'
						}
					/>
				</div>
				<div className={'mt5 h4'}></div>
				<Footer />
			</div>
		</>
	);
}

export default Store;
