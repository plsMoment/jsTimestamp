import { Header } from '../layout/header';
import { EventEntryFormOrg } from '../../components/eventUserForm/event-entry-form-org'

const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1224px',
};


const EventRegOrg = () => {
  return (
  <div style={divStyle}>
      <Header />
      <div className={"container"}>
        <div className={' row'} style= {{marginTop:'8px'}}>
        <div className={'col-3'}></div>
        <EventEntryFormOrg />
        </div>
      </div>
  </div>
  );
};

export default EventRegOrg;