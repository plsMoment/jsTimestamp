import people from './people.png';
import s from './s.module.scss'
import Button from '../../button';
import {formatDate, formatTime} from '../../../helpers/date';
import { Link } from 'react-router-dom';


const divStyle = {
  backgroundColor:'#ECDFFA',
};

const EventPageItem = (props) => {
  let date;
  if(props.event.date != undefined) {
    date = formatDate(props.event.date);
  } else {
    date = null;
  }

  let time;
  if(props.event.time != undefined) {
    time = formatTime(props.event.time);
  } else {
    time = null;
  }

  return (
    <div className={"container"}>
        <div className={' row'} style= {{marginTop:'10px'}}>
        <div className={'col-8'}>
        <div className={s.imgBlock}>
          <div className={s.img}>
          <img src={people} alt="" />
          </div>
          <div>
              <div className={s.nameEvent}>
                  {props.event.name}
              </div>
              <div className={s.data}>
                {date + ", " + time}
              </div>
          </div>
          <div> Описание:</div>
          <div className={s.description}>
              {props.event.description}
          </div>
          <div className={s.button}>
            <Link to='/eventReg' style={{"text-decoration": 'none'}}>
              <Button>Подать заявку</Button>
            </Link>
          </div>
          </div>
          </div>
          </div>
       </div>
     
  );
};

export default EventPageItem;



