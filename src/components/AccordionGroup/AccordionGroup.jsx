import './AccordionGroup.scss';
import cn from 'classnames'

const AccordionGroup = (props) => {
	const {
		className,
		columns = 1,
		mode='',
		children,
		isOrderedList = true,
	} = props;

	const itemsPerColumn = Math.ceil(children.length / columns);
	const ListTag = isOrderedList ? 'ol' : 'ul';

	return (
		<ListTag className={cn(className,'accordion-group', {
			[`accordion-group--${columns}-columns`]: columns > 1,
			'accordion-group--has-counter': isOrderedList,
			[`accordion-group--${mode}`]: mode,
		})}>
			{
				children.map((child, index) => (
					<li className={cn('accordion-group__item', {
						'accordion-group__item--last-column-item': columns > 1 && itemsPerColumn / (index + 1) === 1,
					})} key={index}>
						{child}
					</li>
				))
			}
		</ListTag>
	)
};

export default AccordionGroup;