import './Socials.scss'
import cn from 'classnames'
import Button from '@/components/Button'

const Socials = (props) => {
	const {
		className,
		links = []
	} = props;

	return (
		<div className={cn(className,'soc1als')}>
			<ul className="soc1als__list">
				{
					links.map(({label,iconName}, index) => (
						<li className="soc1als__item" key={index}>
							<Button
								className='soc1als__link'
								mode='black-10'
								href='/'
								target='_blank'
								label={label}
								iconName={iconName}
								isLabelHidden
								hasFillIcon
							/>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Socials;