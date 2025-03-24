import './CategoryCard.scss';
import { Image } from 'minista'
import Icon from '@/components/Icon'

const CategoryCard = (props) => {
	const {
		title,
		images = [],
	} = props;

	return (
		<a href="/movies" className="category-card">
			<div className="category-card__images">
				{images.map((imageSrc, index) => (
					<Image
						className="category-card__image"
						src={imageSrc}
						key={index}
					/>
				))}
			</div>
			<div className="category-card__body">
				<h3 className="category-card__title">
					{title}
				</h3>
				<Icon
					className="category-card__icon"
					name='arrow-right'
				/>
			</div>
		</a>
	);
}

export default CategoryCard;