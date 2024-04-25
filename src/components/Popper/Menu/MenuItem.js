import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const { icon, title, ...props } = data;
    return (
        <Button className={cx('menuItem')} leftIcon={data.icon} onClick={onClick} {...props}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
