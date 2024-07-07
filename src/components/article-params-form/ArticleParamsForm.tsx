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
import { useRef, useState } from 'react';
import { useOutsideClick } from 'src/hooks/useOutsideClick';

type ArticleParamsFormProps = {
	initialSettings: typeof defaultArticleState;
	onApply: (settings: typeof defaultArticleState) => void;
};

export const ArticleParamsForm = ({
	initialSettings,
	onApply,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [settings, setSettings] = useState(initialSettings);

	const toggleForm = () => {
		setIsOpen(!isOpen);
	};

	const formRef = useRef<HTMLDivElement>(null);

	useOutsideClick(formRef, () => setIsOpen(false));

	const handleChange = (name: string, value: OptionType) => {
		setSettings((prevSettings) => ({
			...prevSettings,
			[name]: value,
		}));
	};

	const handleApply = () => {
		onApply(settings);
		setIsOpen(false);
	};

	const handleReset = () => {
		setSettings(defaultArticleState);
		onApply(defaultArticleState);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleForm} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={formRef}>
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
						selected={settings.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={(option) => handleChange('fontFamilyOption', option)}
					/>
					<RadioGroup
						name='sizing'
						selected={settings.fontSizeOption}
						options={fontSizeOptions}
						title='размер шрифта'
						onChange={(option) => handleChange('fontSizeOption', option)}
					/>
					<Select
						selected={settings.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={(option) => handleChange('fontColor', option)}
					/>
					<Separator />
					<Select
						selected={settings.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={(option) => handleChange('backgroundColor', option)}
					/>
					<Select
						selected={settings.contentWidth}
						options={contentWidthArr}
						title='ширина контента'
						onChange={(option) => handleChange('contentWidth', option)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
