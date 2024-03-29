import ReviewForm from '../formReviews/form';
import {useAppSelector} from '../../hooks';
import {calculateStarRating} from '../../utils/utils';
import {AuthorizationStatus} from '../../const';
import {getCurrentComments} from '../../store/comments-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {formatDate} from '../../utils/utils';

type propType = {
  currentId: number;
}

function Reviews({currentId}: propType): JSX.Element {

  const reviews = useAppSelector(getCurrentComments);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const reviewsItems = reviews.map((review) => (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calculateStarRating(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{formatDate(review.date)}</time>
      </div>
    </li>
  ));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsItems}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ?
        <ReviewForm currentId={currentId}/>
        : ''}
    </section>
  );
}

export default Reviews;
