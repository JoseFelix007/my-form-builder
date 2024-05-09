import './Card.scss';

const Card = ({ title, children }) => {
  return (
    <>
      <div className="c-card">
        <div className="c-card__title">{ title }</div>
        { title && <hr className="c-card__sep" /> }
        <div className="c-card__body">
            { children }
        </div>
      </div>
    </>
  );
}

export default Card;