"use client"

import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";


const NavBar = () => {

    const pathname = usePathname()
    const conditions = () => {
        const title = pathname.split("/").pop()
       
        if (title === "definicoes") return (<p>Definições</p>)
        if (title === "transacoes") return (<p>Transações</p>)
        if(pathname.startsWith('/dashboard/colaboradores/list') && title?.length === 36) return (<p>Dados do Colaborador</p>)

        return (<p>{title}</p>)
    }
    return (
        <div className={styles.container}>

            <div className={styles.title}>{conditions()}</div>

            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch />
                    <input type="text" placeholder='Search...' className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>

        </div>
    )
}

export default NavBar