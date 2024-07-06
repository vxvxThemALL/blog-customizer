import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';
import clsx from 'clsx';
import { useState } from 'react';

type ArticleParamsFormProps = {
	selectedFontFamily: OptionType;
	setSelectedFontFamily: (option: OptionType) => void;
	selectedFontSize: OptionType;
	setSelectedFontSize: (option: OptionType) => void;
	selectedFontColor: OptionType;
	setSelectedFontColor: (option: OptionType) => void;
	selectedBackgroundColor: OptionType;
	setSelectedBackgroundColor: (option: OptionType) => void;
	selectedContentWidth: OptionType;
	setSelectedContentWidth: (option: OptionType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const [tempFontFamily, setTempFontFamily] = useState<OptionType>(
		props.selectedFontFamily
	);

	const [tempFontSize, setTempFontSize] = useState<OptionType>(
		props.selectedFontSize
	);

	const [tempFontColor, setTempFontColor] = useState<OptionType>(
		props.selectedFontColor
	);

	const [tempBackgroundColor, setTempBackgroundColor] = useState<OptionType>(
		props.selectedBackgroundColor
	);

	const [tempContentWidth, setTempContentWidth] = useState<OptionType>(
		props.selectedContentWidth
	);

	const handleApply = () => {
		props.setSelectedFontFamily(tempFontFamily);
		props.setSelectedFontSize(tempFontSize);
		props.setSelectedFontColor(tempFontColor);
		props.setSelectedBackgroundColor(tempBackgroundColor);
		props.setSelectedContentWidth(tempContentWidth);
	};

	const resetArticleParams = () => {
		setTempFontFamily(defaultArticleState.fontFamilyOption);
		setTempFontSize(defaultArticleState.fontSizeOption);
		setTempFontColor(defaultArticleState.fontColor);
		setTempBackgroundColor(defaultArticleState.backgroundColor);
		setTempContentWidth(defaultArticleState.contentWidth);

		props.setSelectedFontFamily(defaultArticleState.fontFamilyOption);
		props.setSelectedFontSize(defaultArticleState.fontSizeOption);
		props.setSelectedFontColor(defaultArticleState.fontColor);
		props.setSelectedBackgroundColor(defaultArticleState.backgroundColor);
		props.setSelectedContentWidth(defaultArticleState.contentWidth);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						handleApply();
					}}>
					<Text size={31} weight={800} uppercase>
						{'задайте параметры'}
					</Text>
					<Select
						selected={tempFontFamily}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={setTempFontFamily}
					/>
					<RadioGroup
						name='sizing'
						selected={tempFontSize}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={setTempFontSize}
					/>
					<Select
						selected={tempFontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={setTempFontColor}
					/>
					<Separator />
					<Select
						selected={tempBackgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={setTempBackgroundColor}
					/>
					<Select
						selected={tempContentWidth}
						options={contentWidthArr}
						title='ширина контента'
						onChange={setTempContentWidth}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={resetArticleParams}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
