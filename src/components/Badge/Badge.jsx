import './Badge.scss';
import cn from 'classnames'
import Icon from '@/components/Icon'

const Badge = (props) => {
	const {
		className,
		mode= '',
		children,
		iconName,
		hasFillIcon,
		iconAriaLabel,
		isBig = false,
	} = props;

	return (
		<div
			className={cn(className, 'badge',{
				[`badge--${mode}`]: mode,
				'badge--big': isBig,
			})}
		>
			{
				iconName && (
					<Icon
						className='badge__icon'
						name={iconName}
						ariaLabel={iconAriaLabel}
						hasFillIcon={hasFillIcon}
					/>
				)}
			<span>
				{children}
			</span>
		</div>
	);
};

export default Badge;