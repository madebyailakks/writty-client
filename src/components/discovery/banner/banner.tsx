import styles from '@/components/discovery/banner/banner.module.css'
import Sidebar from "@/components/post/sidebar/sidebar";

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.author}>
                    <p>Ailakks</p>
                    <p>25 February</p>
                </div>
                <h1>Using ChatGPT to build System Diagrams</h1>
                <p>Interested in Mindmaps — read our blog post on using plantUML with ChatGPT to create awesome Mindmaps The popularity of ChatGPT keeps growing and it’s now being used in a wide range of applications.</p>

            </div>
            <Sidebar />
        </div>
    )
}
