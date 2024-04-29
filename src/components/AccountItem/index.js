import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Đỗ Xuân Sơn
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('userName')}>doxuanson</span>
            </div>
        </div>
    );
}

export default AccountItem;
