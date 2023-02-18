import styles from "@/components/ui/input/search-bar/search-bar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.wrapper}>
            <i className="fa-thin fa-magnifying-glass" />
            <input placeholder={"Search..."} />
        </div>
    )
}
