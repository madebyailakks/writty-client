import styles from '@/components/discovery/banner/banner.module.css'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.author}>
                <img className={"profile-avatar"} src={"https://miro.medium.com/freeze/fit/c/176/176/1*pvaJlwES-gx2itutOSb12w.gif"} height={20} />
                <p>Ailakks</p>
                <p>25 February</p>
            </div>
            <h1>Using ChatGPT to build System Diagrams</h1>
            <p>Interested in Mindmaps — read our blog post on using plantUML with ChatGPT to create awesome Mindmaps The popularity of ChatGPT keeps growing and it’s now being used in a wide range of applications.</p>
            <hr />
        </div>
    )
}
