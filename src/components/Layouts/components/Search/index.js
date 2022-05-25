import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css'; //
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import useDebouce from '~/hooks/useDebouce';
import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Search.module.scss';
import * as searchService from '~/api/searchServices';
const cx = classNames.bind(styles);

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [showResults, setShowsResults] = useState(true);
  const [showLoading, setShowsLoading] = useState(false);

  const debouced = useDebouce(searchValue, 500);

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
    if (!debouced.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchApi = async () => {
      setShowsLoading(true);

      const result = await searchService.search(debouced);
      setSearchResults(result);

      setShowsLoading(false);
    };
    fetchApi();
  }, [debouced]);

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

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
          onChange={handleChange}
          onFocus={() => setShowsResults(true)}
        />
        {!!searchValue && !showLoading && (
          <button className={cx('clear')} onClick={handleClearSearch}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {showLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
