import React from 'react';
import classes from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

const Container = ({children, className, ...props}) => {
    return (
        <div className={classes(styles.root, className)} {...props}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Container;