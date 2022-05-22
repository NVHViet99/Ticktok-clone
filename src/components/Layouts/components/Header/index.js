import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faCircleXmark,
  faCog,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faQuestionCircle,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; //
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import { Wrapper as PopperWrapper } from '../../Popper';
import Menu from '../../Popper/Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon className={cx('icon')} icon={faEarthAsia} />,
    title: 'English',
    children: {
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'VietNamese',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon className={cx('icon')} icon={faQuestionCircle} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  { icon: <FontAwesomeIcon className={cx('icon')} icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon className={cx('icon')} icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon className={cx('icon')} icon={faBitcoin} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon className={cx('icon')} icon={faCog} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon className={cx('icon')} icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([]);
    }, 2000);
  }, []);

  const handleMenuChange = (item) => {
    console.log(item);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <HeadlessTippy
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
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <div className={cx('current-user')}>
              <>
                <Tippy delay={[0, 50]} content="Upload video">
                  <button className={cx('action-btn')}>
                    <UploadIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Message">
                  <button className={cx('action-btn')}>
                    <MessageIcon />
                  </button>
                </Tippy>
                <Tippy delay={[0, 50]} content="Inbox">
                  <button className={cx('action-btn')}>
                    <InboxIcon />
                  </button>
                </Tippy>
              </>
            </div>
          ) : (
            <>
              <Button text className={cx('custom-login')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onchange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9552a57e0b326fabe47bf018cd48b10d~c5_100x100.jpeg?x-expires=1653271200&x-signature=pL9Vu3ie2UAKOdY6XzNNpZHq29Y%3D"
                alt="Nguyen Van A"
                fallback="https://s2.coinmarketcap.com/static/img/coins/64x64/2099.png"
              />
            ) : (
              <button className={cx('btn-more')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
