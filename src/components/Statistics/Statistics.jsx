import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { StatisticsItem } from './StatisticsItem';


export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statisticlist}>
            {stats.map(statistics => (
            < StatisticsItem key={statistics.id} data={statistics} className={css.item} />
            ))}
        </ul>
          
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};