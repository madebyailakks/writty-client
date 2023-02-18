import styles from '@/pages/post/post.module.css'
import Article from "@/components/post/article/article";
import Sidebar from "@/components/post/sidebar/sidebar";

export default function Post() {
    return (
        <div className={styles.content}>
            <Article />
            <Sidebar />
        </div>
    )
}
