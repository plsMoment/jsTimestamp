import { Header } from '../layout/header';
import EventEntryForm from '../../components/eventUserForm/event-entry-form';

const divStyle = {
  backgroundColor:'#ECDFFA',
  height: '1024px',
};


const EventReg = () => {
  return (
  <div style={divStyle}>
      <Header />
      <div className={"container"}>
        <div className={' row'} style= {{marginTop:'120px'}}>
        <div className={'col-3'}></div>
        <EventEntryForm />
        </div>
      </div>
  </div>
  );
};

export default EventReg;