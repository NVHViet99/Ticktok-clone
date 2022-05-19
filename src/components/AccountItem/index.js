import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a5ecdc053eda13b839dfce39e6cf8fb1~c5_300x300.webp?x-expires=1653123600&x-signature=PISFF5D6JBD%2BYiFfWJj9OFgkPYE%3D"
        alt="Hoaa"
        className={cx('avatar')}
      />
      <div className={cx('infor')}>
        <p className={cx('name')}>
          <span className={cx('')}>Nguyen Van Hoang Viet</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>NVHViet</span>
      </div>
    </div>
  );
}

export default AccountItem;
