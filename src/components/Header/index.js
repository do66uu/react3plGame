import React from 'react';
import logo from '../../assets/logo.png'
import Container from "../Container";
import styles from  './styles.module.css'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const Header = () => {
    return (
        <header className={styles.root}>
            <div className={styles.header}>
                <Container className={styles.headerWrap}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <ul className={styles.nav}>
                        {MENU.map(item =>
                            <li><a href="#">{item}</a></li>
                        )}
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;