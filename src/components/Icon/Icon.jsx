import './Icon.scss';
import cn from 'classnames'
import {Icon as MinistaIcon} from 'minista';

const Icon = (props) => {
	const {
		className,
		name,
		ariaLabel,
		hasFill = false,
	} = props;

	return (
		<span
			className={cn(className, 'icon')}
			aria-label={ariaLabel}
		>
			<MinistaIcon
				iconId={name}
				fill={hasFill ? 'currentColor' : 'none'}
				stroke={hasFill ? 'none' : 'currentColor'}
			/>
		</span>
	)
}

export default Icon;