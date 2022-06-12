import React from "react";
import styles from './styles.module.css'
import cn from 'classnames'
import PropTypes from "prop-types";

const Text = ({
    element,
    children,
    className,
    italic,
    disabled,
    strong
}) => {
    return React.createElement(element, {
        className: cn(styles.root, className, {
            [styles.italic]: italic,
            [styles.disabled]: disabled,
            [styles.strong]: strong,
        })
    }, children)
}

Text.defaultProps = {
    element: 'div',
}

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'span', 'p']).isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
    strong: PropTypes.bool,
}

export default Text;