import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7078672293634932738.jpeg?lk3s=a5d48078&x-expires=1714266000&x-signature=AwmobhgWnBFQi%2FWN9956rMR29xc%3D"
                    alt=""
                />
                <Button className={cx('followBtn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>xuanson2003</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Xuân Sơn</p>
                <div className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <p className={cx('label')}>Followers</p>
                    <strong className={cx('value')}>6.5M</strong>
                    <p className={cx('label')}>Likes</p>
                </div>
            </div>
        </div>
    );
}

export default AccountPreview;
