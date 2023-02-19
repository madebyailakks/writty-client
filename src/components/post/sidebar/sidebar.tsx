import ProfileBox from "@/components/profile/profile-box/profile-box";
import styles from '@/components/post/sidebar/sidebar.module.css'
import List from "@/components/post/list/list/list";

export default function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <ProfileBox />
            <hr />
            <List />
        </div>
    )
}
