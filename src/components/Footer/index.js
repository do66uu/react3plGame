import React from 'react';
import Container from "../Container";
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.root}>
            <Container>
                <div className={styles.footerWrap}>
                    Coded with
                    <span className={styles.heart}></span>
                    by You
                </div>
            </Container>
        </footer>
    );
};

export default Footer;