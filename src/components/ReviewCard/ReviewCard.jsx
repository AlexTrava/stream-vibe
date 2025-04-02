import './ReviewCard.scss';
import Badge from '@/components/Badge/index.js'
import RatingView from '@/components/RaitingView/index.js'

const ReviewCard = (props) => {
	const {
		name,
		subtitle,
		description,
		ratingVal,
	} = props;

	return (
		<div className="review-card">
			<header className="review-card__header">
				<div className="review-card__author">
					<h4 className="review-card__name h6">
						{name}
					</h4>
					<p className="review-card__subtitle">
						{subtitle}
					</p>
				</div>
				<Badge>
					<RatingView
						value={ratingVal}
						label={ratingVal}
					/>
				</Badge>
			</header>
			<div className="review-card__body">
				<p>{description}</p>
			</div>
		</div>
	)
};

export default ReviewCard;