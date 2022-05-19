import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1, 2, 3]);
    }, 2000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('label')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>1</div>
      </div>
    </header>
  );
}

export default Header;
