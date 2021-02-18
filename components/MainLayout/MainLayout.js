import Link from 'next/link';
import styles from './MainLayout.module.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactsIcon from '@material-ui/icons/Contacts';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { useRouter } from "next/router";


import useWindowDimensions from '../../components/Helper/index'
const MainLayout=({children})=>{
    const router = useRouter();
    const { height, width } = useWindowDimensions()
    const breakpoint = 650

    return (<div className={styles.wrapper}>
        <nav className={styles.container}>
            <Link href={'/'}><a className={router.pathname === "/" ? styles.active : styles.item}><DashboardIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "DASHBOARD": ""}</a></Link>
            <Link href={'/about'}><a className={router.pathname === "/about" ? styles.active : styles.item}><PersonPinCircleIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "ABOUT": ""}</a></Link>
            <Link href={'/projects'}><a className={router.pathname === "/projects" ? styles.active : styles.item}><DeveloperModeIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "PROJECTS": ""}</a></Link>
            <Link href={'/resume'}><a className={router.pathname === "/resume" ? styles.active : styles.item}><ReceiptIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "RESUME": ""}</a></Link>
            <Link href={'/contacts'}><a className={router.pathname === "/contacts" ? styles.active : styles.item}><ContactsIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "CONTACTS": ""}</a></Link>
        </nav>
        <main style={{zIndex:200}}>
            {children}
        </main>
    </div>);
};
export default MainLayout;