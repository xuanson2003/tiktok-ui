import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img
                        alt="File:TikTok logo.svg"
                        src="//upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/500px-TikTok_logo.svg.png?20200415104610"
                        decoding="async"
                        width="500"
                        height="146"
                        srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/750px-TikTok_logo.svg.png?20200415104610 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1000px-TikTok_logo.svg.png?20200415104610 2x"
                        data-file-width="500"
                        data-file-height="146"
                        className={cx('logoImage')}
                    />
                </div>

                <form className={cx('search')}>
                    <input placeholder="Search" />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* loading */}
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('searchBtn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>

                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
