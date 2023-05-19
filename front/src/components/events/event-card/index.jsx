import s from './event-card.module.scss';
import people from './people.png';
import favoriteIconImgActive from './favorite-icon-active.svg'; // это иконка добавления в избранное, если мер-е в него добавлено
import favoriteIconImg from './favorite-icon.svg';
import {formatDate} from '../../../helpers/date';

export const EventCard = (props) => {
    let eventName;
    let shortDescription;

    if(props.event.name !== undefined) {
        eventName = String(props.event.name);
        eventName = eventName.length > 24 ? eventName.substring(0, 24) + "..." : eventName ;
    }

    if(props.event.shortDescription !== undefined) {
        shortDescription = String(props.event.shortDescription);
        shortDescription = shortDescription.length > 42 ? shortDescription.substring(0, 42) + "..." : shortDescription ;
    }

    return (
        <div className={s.eventCard}>
            <div className={s.imgBox}>
                <img src={people} alt="" />
                <img src={favoriteIconImg} className={s.favoriteIcon} ></img>
            </div>
            <h6 className={s.eventCardHeader}>{eventName}</h6>
            <span className={s.eventShortDescription}>{shortDescription}</span>
            <span className={s.eventCardLocation}>Online</span>
            <div className={s.row}>
                <span className={s.eventCardDate}>{formatDate(props.event.date)}</span>
                <span className={s.eventCategory}>{props.event.category}</span>
            </div>
            {/* <div className={s.eventCardButton}>
                <span className={s.eventCardPrice}>{props.event.price}</span>
            </div> */}
        </div>
    );
};

export default EventCard; 