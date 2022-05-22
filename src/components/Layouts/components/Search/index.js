import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css'; //
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [showResults, setShowsResults] = useState(true);

  const handleHideResults = () => {
    setShowsResults(false);
  };

  const searchRef = useRef();

  const handleClearSearch = () => {
    setSearchValue('');
    setSearchResults([]);
    searchRef.current.focus();
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([1]);
    }, 2000);
  }, []);
  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResults.length > 0}
      onClickOutside={handleHideResults}
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
        <input
          ref={searchRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowsResults(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
