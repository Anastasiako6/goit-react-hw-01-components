import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import { Row } from './Row'; 

export const TBody = ({items}) => {
    return (
    <tbody className={css.tbody}>
      {items.map(item => {
        return <Row item={item} key={item.id} />;
      })}
    </tbody>
  );
}


TBody.propsTypes = {
  items: PropTypes.arrayOf({
    key: PropTypes.string.isRequired,
  }).isRequired,
};
