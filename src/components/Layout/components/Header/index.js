import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Layout/Search';
import {
    CoinIcon,
    KeyBoardIcon,
    LanguageIcon,
    LogoutIcon,
    MailboxIcon,
    MessageIcon,
    MoonIcon,
    QuestionIcon,
    SettingIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        leftIcon: <LanguageIcon width="2rem" height="2rem" />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        leftIcon: <QuestionIcon width="2rem" height="2rem" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        leftIcon: <KeyBoardIcon width="2rem" height="2rem" />,
        title: 'Keyboard shortcuts',
    },
    {
        leftIcon: <MoonIcon width="2rem" height="2rem" />,
        title: 'Dark mode',
        rightIcon: (
            <label className={cx('switch')}>
                <input type="checkbox" />
                <span className={cx('slider')}></span>
            </label>
        ),
    },
];

function Header() {
    const currentUser = true;

    // Handle
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            leftIcon: <UserIcon width="2rem" height="2rem" />,
            title: 'Xem trang cá nhân',
            to: '/@Son',
        },
        {
            leftIcon: <CoinIcon width="2rem" height="2rem" />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            leftIcon: <SettingIcon width="2rem" height="2rem" />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEM,
        {
            leftIcon: <LogoutIcon width="2rem" height="2rem" />,
            title: 'Log out',
            to: '/logout',
            separate: 'true',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img alt="File:TikTok logo.svg" src={images.LogoDark} className={cx('logoImage')} />
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('actionUpload')}
                                text
                                leftIcon={<UploadIcon width="2rem" height="2rem" />}
                            >
                                Upload
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('actionBtn')}>
                                    <MessageIcon width="2.6rem" height="3rem" />
                                </button>
                            </Tippy>

                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('actionBtn')}>
                                    <MailboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<UploadIcon width="2rem" height="2rem" />}>
                                Upload
                            </Button>
                            <Button primary className={cx('customBtn')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7078672293634932738.jpeg?lk3s=a5d48078&x-expires=1714266000&x-signature=AwmobhgWnBFQi%2FWN9956rMR29xc%3D"
                                className={cx('userAvatar')}
                                alt="Do Xuan Son"
                            />
                        ) : (
                            <button className={cx('moreBtn')}>
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
