import './Logo.scss'
import cn from 'classnames';

const Logo = (props) => {
    const {
        title,
        loading = 'lazy',
        className,
    } = props
    return (
        <a
          href="/"
          className={cn(className,"logo")}
          title={title}
          aria-label={title}>
            <img
              src="/logo.svg"
              alt=""
              className="logo_image"
              width={199}
              height={60}
              loading={loading}
            />
        </a>
    )
};

export default Logo;