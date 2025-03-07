import './Header.scss'
import Logo from "@/components/Logo";

const Header = () => {
    return (
        <header className='header'>
            <div className="header__inner container">
                <Logo title='Home' loading='eager' className='header__logo'/>
            </div>
        </header>
    )
};

export default Header;