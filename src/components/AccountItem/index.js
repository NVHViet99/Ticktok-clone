import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Images';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
  return (
    <Link to={`@${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
      <Image src={data.avatar} alt={data.avatar} className={cx('avatar')} />
      <div className={cx('infor')}>
        <p className={cx('name')}>
          <span className={cx('')}>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.protoTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
