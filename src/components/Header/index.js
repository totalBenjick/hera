import React from 'react';
import styles from './index.module.sass';
import tix from '../../images/tix_banner.png';
import { ReactComponent as Menu } from '../../icons/menu.svg';

function Header() {
	return (
		<>
			<div
				className={`${styles.header} tc f6 w-101  h2 flex items-center 
				justify-center`}
			>
				Aretes artesanales con diseños increibles
			</div>
			<div
				className={`${styles.header_tixili} tc w-101 f1 flex items-center
			justify-between h3 hr bg-black `}
			>
				<img src={tix} className={`h3 w6`} alt="aretes de papalote" />
				<Menu fill="white" className={`mr3`} />
			</div>
		</>
	);
}

export default Header;
