import classNames from 'classnames/bind';
import styles from './Header.module.scss';

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
                    <input placeholder="search" />

                    <button className={cx('clear')}>{/* clear */}</button>

                    {/* loading */}

                    <button className={cx('searchBtn')}></button>
                </form>
            </div>
        </header>
    );
}

export default Header;
