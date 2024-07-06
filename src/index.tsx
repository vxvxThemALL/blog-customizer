import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': selectedFontFamily.value,
					'--font-size': selectedFontSize.value,
					'--font-color': selectedFontColor.value,
					'--container-width': selectedContentWidth.value,
					'--bg-color': selectedBackgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				selectedFontFamily={selectedFontFamily}
				setSelectedFontFamily={setSelectedFontFamily}
				selectedFontSize={selectedFontSize}
				setSelectedFontSize={setSelectedFontSize}
				selectedFontColor={selectedFontColor}
				setSelectedFontColor={setSelectedFontColor}
				selectedBackgroundColor={selectedBackgroundColor}
				setSelectedBackgroundColor={setSelectedBackgroundColor}
				selectedContentWidth={selectedContentWidth}
				setSelectedContentWidth={setSelectedContentWidth}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
