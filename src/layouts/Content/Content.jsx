import './Content.scss';
import cn from 'classnames'


const Content = (props) => {
    const {
        children,
        isResetPaddingTop = false,
    } = props;

    return (
        <main
          className={cn('content', {
              'content--reset-padding-top': isResetPaddingTop,
          })}
        >
            {children}
        </main>
    )
};

export default Content;