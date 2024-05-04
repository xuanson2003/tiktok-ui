import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '../Image';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (attrs) => (
        <div className={cx('preview')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy interactive delay={[400, 0]} placement="bottom-start" offset={[-20, 0]} render={renderPreview}>
                <div className={cx('accountItem')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7078672293634932738.jpeg?lk3s=a5d48078&x-expires=1714266000&x-signature=AwmobhgWnBFQi%2FWN9956rMR29xc%3D"
                        alt=""
                    />
                    <div className={cx('itemInfo')}>
                        <p className={cx('nickname')}>
                            <strong>xuanson2003</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Xuân Sơn</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
