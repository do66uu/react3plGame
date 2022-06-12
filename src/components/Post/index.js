import React from 'react';
import styles from './styles.module.css'

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post__title}>
                <h1>Патрушев: Польша приступила к захвату Западной Украины</h1>
            </div>
            <div className={styles.post__content}>
                <span>Представитель Совета безопасности РФ заявил, что Польша начала захват западной территории Украины. МИА «Россия сегодня», ссылаясь на заявление секретаря Совбеза ...</span>
            </div>
            <div className={styles.post__ads}>
                <div className={styles.post__stats}>
                    <span className={styles.post__stat}></span>
                    <span>2091</span>
                </div>
                <div className={styles.post__data}>
                    <span>31 мая 2022</span>
                </div>
                <div className={styles.post__author}>
                    <span>Елизавета Посудневская</span>
                </div>
            </div>
        </div>
    );
};

export default Post;