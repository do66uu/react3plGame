import React from 'react';
import Container from "../Container";
import Heading from "../Heading";
import styles from './styles.module.css'

const Slider = () => {
    return (
        <section className={styles.section}>
            <div className={styles.slider}>
                <Container className={styles.sliderContent}>
                    <Heading level={1} className={styles.header}>Header</Heading>
                    <Heading level={2} className={styles.subheader}>SubHeader</Heading>
                    <div className={styles.call}>
                        <button className={styles.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Slider;