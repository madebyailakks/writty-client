import styles from '@/components/post/list/item/item.module.css'

export default function Item() {
    return (
        <div className={styles.wrapper}>
            <img src={"https://miro.medium.com/v2/resize:fit:720/format:webp/1*nUI3MpVOqCZorJxoWNGDPg.jpeg"} width={100} />
            <div className={styles.content}>
                <div className={styles.author}>
                    <img className={"profile-avatar"} src={"https://miro.medium.com/freeze/fit/c/176/176/1*pvaJlwES-gx2itutOSb12w.gif"} height={20} />
                    <p>Ailakks</p>
                </div>
                <h3>Digital Nomads: Misconceptions</h3>
             </div>
        </div>
    )
}
