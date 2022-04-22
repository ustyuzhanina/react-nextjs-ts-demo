import { PProps } from "./P.props";
import styles from './P.module.scss';
import cn from 'classnames';

export const P = ({ fontSize = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
      [styles.s]: fontSize == 's',
      [styles.m]: fontSize == 'm',
      [styles.l]: fontSize == 'l',
    })}
      {...props}
    >
      {children}
    </p>
  );
};