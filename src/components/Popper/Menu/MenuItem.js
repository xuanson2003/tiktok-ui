import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const { icon, title, ...props } = data;
    const classes = cx('menuItem', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={icon} onClick={onClick} {...props}>
            {title}
        </Button>
    );
}

export default MenuItem;
