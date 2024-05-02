import PropTypes from 'prop-types';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const { leftIcon, rightIcon, title, ...props } = data;
    const classes = cx('menuItem', {
        separate: data.separate,
    });
    return (
        <Button className={classes} leftIcon={leftIcon} rightIcon={rightIcon} onClick={onClick} {...props}>
            {title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
