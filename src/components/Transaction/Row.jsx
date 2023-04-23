import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const Row = ({ item }) => {
  return (
    <tr className={css.row}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

Row.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};