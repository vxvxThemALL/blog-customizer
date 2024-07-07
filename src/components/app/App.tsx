import clsx from 'clsx';
import { CSSProperties, useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from './App.module.scss';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

export const App = () => {
	const [articleSettings, setArticleSettings] = useState(defaultArticleState);

	const handleApply = (settings: typeof defaultArticleState) => {
		setArticleSettings(settings);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleSettings.fontFamilyOption.value,
					'--font-size': articleSettings.fontSizeOption.value,
					'--font-color': articleSettings.fontColor.value,
					'--container-width': articleSettings.contentWidth.value,
					'--bg-color': articleSettings.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				initialSettings={articleSettings}
				onApply={handleApply}
			/>
			<Article />
		</div>
	);
};
