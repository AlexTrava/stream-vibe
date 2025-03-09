import './Header.scss'
import Logo from "@/components/Logo";
import cn from 'classnames'
import Button from '@/components/Button/index.js'

const Header = (props) => {
  const {url} = props;
  const menuItems = [
    {
      label: 'Home',
      href:'/',
    },
    {
      label: 'Movies & Shows',
      href:'/movies',
    },
    {
      label: 'Support',
      href:'/support',
    },
    {
      label: 'Subscriptions',
      href:'/subscriptions',
    },
  ];
    return (
        <header className='header'>
            <div className="header__inner container">
                <Logo title='Home' loading='eager' className='header__logo'/>
              <nav className="header__menu">
                <ul className="header__menu-list">
                  {
                    menuItems.map(({label,href},index) => (
                      <li className='header__menu-item' key={index}>
                        <a href={href} className={cn('header__menu-link',{
                          'is-active': href === url,
                        })}>
                          {label}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
              <div className="header__actions">
                <Button
                  className='header__button'
                  label='Search'
                  iconName='search'
                  mode='transparent'
                  isLabelHidden
                />
                <Button
                  className='header__button'
                  label='Notification'
                  iconName='notification'
                  mode='transparent'
                  isLabelHidden
                />
              </div>
            </div>
        </header>
    )
};

export default Header;