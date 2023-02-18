import styles from '@/components/post/article/article.module.css'

export default function Article() {
    return (
        <div className={styles.main}>
            <div className={styles.author}>
                <div className={styles.info}>
                    <img src="https://miro.medium.com/freeze/fit/c/176/176/1*pvaJlwES-gx2itutOSb12w.gif"/>
                    <div>
                        <p>Author</p>
                        <p>Date</p>
                    </div>
                </div>
                <div className={styles.share}>
                    <i className="fa-brands fa-twitter"/>
                    <i className="fa-solid fa-link"/>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Title</h1>
                    <h2 className={styles.subtitle}>Subtitle</h2>
                </div>
                <p className={styles.content}>Content</p>
            </div>
        </div>
    )
}
