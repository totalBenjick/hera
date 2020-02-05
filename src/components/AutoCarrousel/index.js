/**
 * The only true AutoCarrousel.
 *
 * @version 1.0.0
 * @author [totalBenjick](https://github.com/totalBenjick)
 * @description Componente para renderizar carruseles
 *
 * @param {Objet} params props del componente React
 * @param {Array} params.items Array que contiene el src de las imagenes
 * @param {Number} params.index Número de la imagen actual a renderizar
 * @param {Hook} params.setIndex  useState que controla que imagen se esta renderizando
 * @param {Hook} params.device Hook que proporciona info del ambiente donde se esta desplegando la página
 */

import React, { useState } from 'react';
import styles from './index.module.sass';
import useInterval from '../../utils/useInterval';
import { useTransition, animated, config } from 'react-spring';
import Img from 'react-image';

const fps = 32;
const incrementalStep = 8 * fps;

function AutoCarrousel({ items, index, setIndex, device }) {
	const [rightMovement, setRightMovement] = useState(true);
	const [time, setTime] = useState(0);
	const [swipe, setSwipe] = useState({ start: 0, end: 0 });
	const lastIndex = items && items.length - 1;
	const windowWidth = device.width;

	const handleTouchStart = e => {
		const { screenX } = e.touches[0];
		setSwipe({ ...swipe, start: screenX });
	};

	const handleTouchMove = e => {
		const { screenX } = e.touches[0];
		setSwipe({ ...swipe, end: screenX });
	};

	const handleTouchEnd = e => {
		if (!swipe.end) return setSwipe({ start: 0, end: 0 });
		if (Math.abs(swipe.start - swipe.end) < 50)
			return setSwipe({ start: 0, end: 0 });

		e.preventDefault();

		//Swipe end es mayor cuando usuario swipea queriendo mover el item de izq a derecha
		if (swipe.end > swipe.start) {
			if (index !== 0) {
				setRightMovement(false);
				setIndex(index - 1);
			} else setIndex(lastIndex);
		} else if (swipe.start > swipe.end) {
			if (index !== lastIndex) {
				setRightMovement(true);
				setIndex(index + 1);
			} else setIndex(0);
		}
		setTime(0);
		return setSwipe({ start: 0, end: 0 });
	};

	useInterval(
		() => {
			const incremental = (time + 1) % incrementalStep;
			setTime(incremental);
			if (!incremental) {
				const newIndex = index + 1;
				const newItem = items[newIndex];

				setIndex(newItem ? newIndex : 0);
			}
		},
		index === -1 || swipe.start ? null : 800 / fps
	);

	const windowStyle = {};

	const transitionConfig = (rightMovement && {
		from: {
			opacity: 1,
			transform: `translateX(100%) ${windowStyle.transform || ''}`,
		},
		enter: {
			opacity: 1,
			transform: `translateX(0%) ${windowStyle.transform || ''}`,
		},
		leave: {
			display: 'none',
			opacity: 0.0,
			transform: `translateX(-102%) ${windowStyle.transform || ''}`,
		},
		config: config.default,
	}) || {
		from: {
			opacity: 1,
			transform: `translateX(-100%) ${windowStyle.transform || ''}`,
		},
		enter: {
			opacity: 1,
			transform: `translateX(0%) ${windowStyle.transform || ''}`,
		},
		leave: {
			display: 'none',
			opacity: 0.3,
			transform: `translateX(102%) ${windowStyle.transform || ''}`,
		},
		config: config.default,
	};
	const transitions = useTransition(
		[index],
		item => item,
		transitionConfig
	);

	const bullets = [];
	const bulletWidth = Math.floor(windowWidth / items.length) * 0.8;

	for (let i = 0; i < items.length; i++) {
		bullets.push(
			<div
				key={i}
				className={styles.bulletbox}
				style={{
					width: `${bulletWidth}px`,
				}}
			>
				<div
					key={i}
					className={`${styles.bullet} ${(i === index &&
						styles.active) ||
						''}
        ${i < index && styles.finished}
        ${i > index && styles.pending}`}
					style={{
						width: `${bulletWidth}px`,
						transform: `scaleX(${(1 / incrementalStep) * time})`,
					}}
				></div>
			</div>
		);
	}

	return (
		<>
			<div className={`${styles.container} bg-base w-90 h5`}>
				{transitions.map(({ item, key, props }) => {
					const node = items[item];
					return (
						<animated.div
							key={key}
							className={`${styles.window}`}
							style={{ ...props, windowStyle }}
						>
							<div
								className={`${styles.content} flex items-center 
                            justify-center`}
								onTouchEnd={handleTouchEnd}
								onTouchMove={handleTouchMove}
								onTouchStart={handleTouchStart}
							>
								<div className={styles.link}>
									<Img
										src={node.image}
										className={`${styles.mainImage} w-100 mw6`}
									/>
								</div>
							</div>
						</animated.div>
					);
				})}
				<div className={styles.bullets}>{bullets}</div>
			</div>
		</>
	);
}

export default AutoCarrousel;
