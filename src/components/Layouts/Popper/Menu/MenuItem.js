import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <div className={cx('wrapper-item')}>
      <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
