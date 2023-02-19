import styles from '@/components/discovery/discovery/discovery.module.css'
import Banner from "@/components/discovery/banner/banner";
import Sidebar from "@/components/post/sidebar/sidebar";

export default function Discovery() {
    return (
        <div className={styles.wrapper}>
            <Banner />
            <Sidebar />
        </div>
    )
}
