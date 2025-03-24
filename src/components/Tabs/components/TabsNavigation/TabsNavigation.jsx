import './TabsNavigation.scss';
import getIdFromTitle from '@/utils/getIdFromTitle.js'
import cn from 'classnames'
import getTabsElementsIdsFromTitle
	from '@/components/Tabs/utils/getTabsElementsIdsFromTitle.js'

const TabsNavigation = (props) => {
	const {
		className,
		id,
		title,
		items = [],
	} = props;

	const titleFormatted = getIdFromTitle(title);
	const titleId = `${titleFormatted}-title`;


	return (
		<div
			className={cn(className, 'tabs-navigation')}
			id={id}
			role="tablist"
			aria-labelledby={titleId}
			data-js-tabs-navigation=''
		>
			<h3
				className="visually-hidden"
				id={titleId}
			>
				{title}
			</h3>
			{
				items.map((item, index) => {
					const {buttonId, contentId} = getTabsElementsIdsFromTitle(item.title);

					return (
						<div
							className={cn('tabs-navigation__button', {'is-active': item.isActive})}
							id={buttonId}
							aria-controls={contentId}
							key={index}
							role="tab"
							aria-selected={item.isActive}
							tabIndex={item.isActive ? 0 : -1}
							data-js-tabs-button=''
						>
							{item.title}
						</div>
					)
				})
			}
		</div>
	);
};

export default TabsNavigation;