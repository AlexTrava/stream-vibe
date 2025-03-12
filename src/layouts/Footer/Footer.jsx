import './Footer.scss'
import Socials from '@/components/Socials'

const Footer = () => {
    const menuItems = [
        {
            title: 'Home',
            links:['Categories','Devices','Pricing','FAQ'],
        },
        {
            title: 'Movies',
            links:['Gernes','Trending','New Release','Popular'],
        },
        {
            title: 'Shows',
            links:['Gernes','Trending','New Release','Popular'],
        },
        {
            title: 'Support',
            links:['Contact Us'],
        },
        {
            title: 'Subscription',
            links:['Plans','Features'],
        },
        {
            title: 'Connect With Us',
            socialLinks: [
                {
                    label: 'Facebook',
                    iconName: 'facebook',
                },
                {
                    label: 'Twitter',
                    iconName: 'twitter',
                },
                {
                    label: 'LinkedIn',
                    iconName: 'linked-in',
                },
            ],
        },
    ];

    const extraLinks = ['Terms of Use','Privacy Policy','Cookie Policy'];

    return (
      <div className="footer">
          <div className="footer__inner container">
              <nav className="footer__menu">
                  {
                      menuItems.map(({title,links,socialLinks},index) => {
                          return (
                            <div className="footer__menu-column" key={index}>
                                <a
                                  href="/"
                                  className="footer__menu-title h6">{title}
                                </a>
                                {
                                    links?.length && (
                                      <ul className="footer__menu-list">
                                          {
                                              links.map((link, index) => (
                                                <li className='footer__menu-item' key={index}>
                                                    <a
                                                      href="/"
                                                      className="footer__menu-link">
                                                        {link}
                                                    </a>
                                                </li>
                                              ))
                                          }
                                      </ul>
                                  )
                                }
                                {
                                    socialLinks?.length && (
                                    <Socials className="footer__soc1al" links={socialLinks} />
                                  )
                                }
                            </div>
                          )
                      })
                  }
              </nav>
              <div className="footer__extra">
                  <p className="footer__copyright">
                      @<time dateTime='2025'>2025</time> streamvib, All Rights Reserved
                  </p>
                  <div className="footer__extra-links">
                      {
                          extraLinks.map((link, index) => (
                            <a href="/" className="footer__extra-link" key={index}>
                                {link}
                            </a>
                          ))
                      }
                  </div>
              </div>
          </div>
      </div>
    )
};

export default Footer;