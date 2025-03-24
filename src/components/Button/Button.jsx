import './Button.scss'
import cn from 'classnames'
import Icon from '@/components/Icon'

const Button = (props) => {
	const {
		className,
		type = 'button',
		href,
		target,
		label,
		iconName,
		mode = '',
		iconPosition = 'before',
		isLabelHidden = false,
		hasFillIcon,
		extraAttrs,
	} = props;

	const isLink = !!href;
	const Component = isLink ? 'a' : 'button';
	const linkProps = {href, target};
	const buttonProps = {type};
	const specificProps = isLink ? linkProps: buttonProps;
	const title = isLabelHidden ? label : undefined;
	const iconComponent = iconName  && (
		<Icon
			className='button__icon'
			name={iconName}
			hasFill={hasFillIcon}
		/>
	);

	return (
		<Component
			{...specificProps}
			{...extraAttrs}
			aria-label={title}
			title={title}
			className={cn(className,'button', {
				[`button--${mode}`]:mode
			})}
		>
			{
				iconPosition === 'before' && iconComponent
			}
			{
				!isLabelHidden && (
					<span className="button__label">{label}</span>
				)
			}
			{
				iconPosition === 'after' && iconComponent
			}
		</Component>
	)
};

export default Button;