import React from 'react';
import styles from './sidebar.module.scss';
const list=[{title:'主控制台',isActive:true,id:1},{title:'发布',isActive:false,id:2}];
const href='index.html';
const listItems = list.map((item) =>
    <li className={styles["nav-item"]} key={item.id.toString()}>
            <a className={item.isActive===true?`${styles["nav-link"]} ${styles.active}`:`${styles["nav-link"]}`} href={href}>
            <span>{item.title}</span>
        </a>
    </li>
);
class Sidebar extends React.Component{

    render(){
        return(
            <aside className={styles["main-siderbar"]}>
                <div className={styles["main-navbar"]}>
                    <nav className={styles.navbar}>
                        <span className={styles["navbar-brand"]}>Shards Dashboard</span>
                    </nav>
                </div>
                <div className={styles["nav-wrapper"]}>
                    <ul className={`${styles["flex-column"]} ${styles.nav}`}>
                        {listItems}
                    </ul>
                </div>
            </aside>
        );
    }
}
export default Sidebar;