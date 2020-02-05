import React from 'react';
import styles from './index.module.sass';
import { ReactComponent as Location } from '../../icons/location.svg';

const classN = `${styles.pinContainer} center bg-white br3 pa3 pa4-ns 
                mv3 ba b--pink flex justify-center shadow-5`;

const PinGPS = () => {
	return (
		<div className={classN}>
			<div>
				<Location fill={'#f00'} />
			</div>
		</div>
	);
};

export default PinGPS;
