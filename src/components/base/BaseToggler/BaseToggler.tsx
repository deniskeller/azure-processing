//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import s from './BaseToggler.module.scss';

interface Props {
	name: string;
	checked: string;
	className?: string;
	labels: string[];
	onChange: (e: React.FormEvent) => void;
}

const BaseSwitch: React.FC<Props> = ({
	className = '',
	name = '',
	checked = false,
	labels = [],
	onChange,
}) => {
	const refContainer = useRef(null);
	const refToggler = useRef(null);

	const [style, setStyle] = useState({});

	const onClickHandler = (e) => {
		setStyle({
			top: `${e.currentTarget.parentElement.offsetTop}px`,
			left: `${e.currentTarget.parentElement.offsetLeft}px`,
			width: `${e.currentTarget.parentElement.offsetWidth}px`,
			height: `${e.currentTarget.parentElement.offsetHeight}px`,
			display: 'block',
		});
	};

	const [width2, setWidth2] = useState(0);

	useEffect(() => {
		const index = labels.findIndex((item) => item === checked);
		const elementChecked = refContainer.current.childNodes[index];

		const height = `${elementChecked.offsetHeight}px`;
		const width = `${elementChecked.offsetWidth}px`;
		const top = `${elementChecked.offsetTop}px`;
		const left = `${elementChecked.offsetLeft}px`;

		setStyle({ top, left, width, height, display: 'block' });

		const windowInnerWidth = window.innerWidth;

		window.addEventListener('resize', () => setWidth2(windowInnerWidth));

		return () => window.removeEventListener('resize', setWidth2());
	}, [checked, labels, width2]);

	return (
		<div className={`${s.Toggle} ${className}`} ref={refContainer}>
			{labels.map((item, key) => {
				return (
					<label key={key} htmlFor={item}>
						<input
							onChange={onChange}
							type='radio'
							id={item}
							name={name}
							value={item}
							checked={checked === item}
						/>
						<div className={s.Toggle_Label} onClick={onClickHandler}>
							<span>{item}</span>
						</div>
					</label>
				);
			})}
			<div className={s.Toggler} style={style} ref={refToggler} />
		</div>
	);
};

export default BaseSwitch;
