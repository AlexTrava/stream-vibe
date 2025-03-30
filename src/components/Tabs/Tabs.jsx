import './Tabs.scss';
import cn from 'classnames'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle.js'
import TabsNavigation	from '@/components/Tabs/components/TabsNavigation'
import getIdFromTitle from '@/utils/getIdFromTitle.js'

const Tabs = (props) => {
	const {
		className,
		title,
		items = [],
		navigationTargetElementId = null,
		isEnableOnlyOnMobile = false,
	} = props;

	const titleFormatted = getIdFromTitle(title);
	const {buttonId, contentId } = getTabsElementsIdsFromTitle(titleFormatted)


	return (
		<div
			className={cn(className, 'tabs', {
				'tabs--enable-only-on-mobile': isEnableOnlyOnMobile,
			})}
			data-js-tabs={JSON.stringify({
				navigationTargetElementId,
			})}
		>
			{
				!navigationTargetElementId && (
					<TabsNavigation
						title={title}
						items={items}
					/>
				)
			}
			<div className="tabs__body">
				{
					items.map(({title,children,isActive}, index) => (
						<div
							className={cn('tabs__content', {'is-active': isActive})}
							id={contentId}
							aria-labelledby={buttonId}
							tabIndex={0}
							data-js-tabs-content=''
							key={index}
						>
							{children}
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Tabs;