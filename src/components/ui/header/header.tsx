import styles from "@/components/ui/header/header.module.css";
import SearchBar from "@/components/ui/input/search-bar/search-bar";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <p>Writty</p>
                <SearchBar />
            </div>
        </div>
    )
}
