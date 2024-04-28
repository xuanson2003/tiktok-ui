import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faEllipsisVertical,
    faPlus,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    KeyBoardIcon,
    LanguageIcon,
    LogoutIcon,
    MailboxIcon,
    MessageIcon,
    QuestionIcon,
    SettingIcon,
    UploadIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <LanguageIcon width="2rem" height="2rem" />,
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
        icon: <QuestionIcon width="2rem" height="2rem" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyBoardIcon width="2rem" height="2rem" />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
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
            icon: <UserIcon width="2rem" height="2rem" />,
            title: 'Xem trang cá nhân',
            to: '/@Son',
        },
        {
            icon: <CoinIcon width="2rem" height="2rem" />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <SettingIcon width="2rem" height="2rem" />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon width="2rem" height="2rem" />,
            title: 'Log out',
            to: '/logout',
            separate: 'true',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        alt="File:TikTok logo.svg"
                        src="//upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/500px-TikTok_logo.svg.png?20200415104610"
                        className={cx('logoImage')}
                    />
                </div>

                <HeadlessTippy
                    interactive
                    // visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('searchTitle')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        {/* loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('searchBtn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

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
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
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
