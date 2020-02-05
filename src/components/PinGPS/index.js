import React from 'react';
import styles from './index.module.sass';
import { ReactComponent as Location } from '../../icons/location.svg';

const classN = `${styles.pinContainer} center bg-white br3 pa3 pa4-ns 
                mv3 ba b--pink flex flex-column items-center justify-center shadow-5`;

const PinGPS = ({ caption, locationURL }) => {
	console.log(caption, locationURL);
	return (
		<div className={classN}>
			<Location fill={'#f00'} />
			<p className="lh-copy measure center f5 black-70">{caption}</p>
			<iframe
				src={locationURL}
				width="600"
				height="450"
				frameBorder="0"
				style={{ border: 'o', width: '100%', height: '200px' }}
				className="mt3"
				allowFullScreen=""
			></iframe>
		</div>
	);
};

export default PinGPS;
