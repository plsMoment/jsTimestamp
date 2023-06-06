import {useContext, useState} from 'react';
import {Context} from '../../../index';
import { useNavigate } from 'react-router-dom';
import {observer} from "mobx-react-lite";

const LoginForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false);
  const {store} = useContext(Context);
  const navigate = useNavigate();

    function changeCheckbox() {
        setChecked(!checked);
    }

  async function nav(name, password){
      await store.login(name, password);
      if(store.isAuth){
          navigate('/');
      }
  }

  return (
    <div>
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        type="text"
        placeholder='Name'
      />
      <input
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder='Пароль'
      />
      <button onClick={() => nav(name, password)}>
        Логин
      </button>
      <button onClick={() => store.registration(name, password, checked)}>
        Регистрация
      </button>
      <input type="checkbox" checked={checked} onChange={changeCheckbox} />
    </div>
  );
};

export default observer(LoginForm);