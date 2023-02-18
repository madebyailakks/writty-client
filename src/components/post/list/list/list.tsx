import styles from '@/components/post/list/list/list.module.css'
import Item from "@/components/post/list/item/item";

export default function List() {
    return (
        <div className={styles.wrapper}>
            <h2>More from Ailakks</h2>
            <Item />
        </div>
    )
}
