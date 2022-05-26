import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '../../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from '../Menu/Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onchange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const rederItems = () => {
    return current.data.map((item, idx) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={idx}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onchange(item);
            }
          }}
        />
      );
    });
  };

  // NOTE UI
  return (
    <Tippy
      // visible
      delay={[0, 500]}
      offset={[12, 10]}
      interactive
      hideOnClick={hideOnClick}
      placement="bottom-end"
      onHidden={() => setHistory((pre) => pre.slice(0, 1))}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header title="Languages" onBack={() => setHistory((pre) => pre.slice(0, pre.length - 1))} />
            )}
            <div className={cx('menu-body')}> {rederItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
