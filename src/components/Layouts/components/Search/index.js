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
  const [showLoading, setShowsLoading] = useState(false);

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
    (async () => {
      try {
        if (!searchValue.trim()) {
          setSearchResults([]);
          return;
        }
        setShowsLoading(true);
        const response = await fetch(
          `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`,
        );
        const { data } = await response.json();
        setSearchResults(data);
        console.log(data);
        setShowsLoading(false);
      } catch (error) {
        console.log(error);
        setShowsLoading(false);
      }
    })();
  }, [searchValue]);

  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResults.length > 0}
      onClickOutside={handleHideResults}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('label')}>Accounts</h4>
            {searchResults.map((result) => (
              <AccountItem key={result.id} data={result} onClick={() => setSearchResults([])} />
            ))}
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
          onKeyDown={(e) => {
            if (e.which === 32 && e.target.selectionStart === 0) {
              e.preventDefault();
              return;
            }
          }}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowsResults(true)}
        />
        {!!searchValue && !showLoading && (
          <button className={cx('clear')} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
