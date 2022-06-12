import React from "react";
import styles from './styles.module.css'
import PropTypes from "prop-types";
import cn from 'classnames'

const Heading = ({level, children, black, className}) => {
    const el = `h${level}`
    return React.createElement(el, {
        className: cn(
            styles.root,
            styles[`level${level}`],
            className, {
                [styles.blackText]: black
            }
        )
    }, children)
}

Heading.defaultProps = {
    level: 1,
    black: false,
}

Heading.propTypes = {
    level: PropTypes.oneOf([1,2,3,4,5]).isRequired,
    children: PropTypes.node,
    black: PropTypes.bool,
    className: PropTypes.string,
}

export default Heading