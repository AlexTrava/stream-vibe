import './SliderNavigation.scss';
import cn from 'classnames'
import Button from '@/components/Button/index.js'

const SliderNavigation = (props) => {
	const {
		className,
		id,
		mode='',
		hasPagination = true,
	} = props;

	return (
		<div
			className={cn(className, 'slider-navigation', {
				[`slider-navigation--${mode}`]: mode,
			})}
		  id={id}
			data-js-slider-navigation=''
		>
			<Button
				className='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
				mode='black-10'
				iconName='arrow-left'
				label='Previous slide'
				extraAttrs={{'data-js-slider-previous-button':''}}
				isLabelHidden
			/>
			{
				hasPagination && (
					<div className="slider-navigation__pagination" data-js-slider-pagination=''/>
				)
			}
			<Button
				className='slider-navigation__arrow-button slider-navigation__arrow-button--next'
				mode='black-10'
				iconName='arrow-right'
				label='Next slide'
				extraAttrs={{'data-js-slider-next-button':''}}
				isLabelHidden
			/>
		</div>
	);
};

export default SliderNavigation;