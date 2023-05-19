import s from './s.module.scss';

const Button = (props) => {
    return (
        <div className={s.Button}>
            {props.children}
        </div>
    );
};

export default Button;