import './Seasons.scss';
import AccordionGroup from '@/components/AccordionGroup/index.js'
import seasonItems from '@/components/Seasons/seasonItems.js'
import Accordion from '@/components/Accordion/index.js'
import EpisodeCard from '@/components/EpisodeCard/index.js'

const Seasons = (props) => {
	const {
		title,
	} = props;

	return (
		<AccordionGroup
			className="seasons"
			mode='dark'
			isOrderedList = {false}
		>
			{
				seasonItems.map(({title,subtitle,episodes},index) => (
					<Accordion
						title={title}
						titleLevelClassName='h4'
						subtitle={subtitle}
						id={`seasons-${index}`}
						name='seasons'
						isOpen={index === 0}
						key={index}
						isArrowButton
					>
						<ul className="seasons__list">
							{
								episodes.map((episode, index) => (
									<li className="seasons_item" key={index}>
										<EpisodeCard {...episode} />
									</li>
								))
							}
						</ul>
					</Accordion>
				))
			}
		</AccordionGroup>
	)
};

export default Seasons;