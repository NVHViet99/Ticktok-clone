import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  className,
  leftIcon,
  onClick,
  primary,
  outline,
  text,
  rounded,
  disabled,
  small,
  large,
  children,
  ...passProps
}) {
  let Component = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    // delete props.onClick;

    // remove event listener when btn is disabled
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    rounded,
    disabled,
    leftIcon,
  });

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
    </Component>
  );
}

export default Button;
