import styles from '@/components/profile/profile-box/profile-box.module.css'

export default function ProfileBox() {
    return (
        <div className={styles.box}>
            <div>
                <img className={"profile-avatar"} src="https://miro.medium.com/freeze/fit/c/176/176/1*pvaJlwES-gx2itutOSb12w.gif" height={80} />
                <h1>Ailakks</h1>
                <p>0 followers</p>
            </div>
            <p>No disponible. Me gusta el mundo de las IAs y tal.</p>
            <div>
                <button className={"main"}>Follow</button>
            </div>
        </div>
    )
}
