import Link from 'next/link';
import styles from './MainLayout.module.css';
import ContactsIcon from '@material-ui/icons/Contacts';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import BarChartIcon from '@material-ui/icons/BarChart';
import { useRouter } from "next/router";
import useWindowDimensions from '../../components/Helper/index'
const MainLayout=({children})=>{
    const router = useRouter();
    const { height, width } = useWindowDimensions()
    const breakpoint = 650

    return (<div className={styles.wrapper}>
        <nav className={styles.container}>
            <div><img className='imgSmall' src='./logo6.png'/></div>
            <Link href={'/about'}><a className={router.pathname === "/about" ? styles.active : styles.item}><PersonPinCircleIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "ABOUT": ""}</a></Link>
            <Link href={'/projects'}><a className={router.pathname === "/projects" ? styles.active : styles.item}><DeveloperModeIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "PROJECTS": ""}</a></Link>
            <Link href={'/skills'}><a className={router.pathname === "/skills" ? styles.active : styles.item}><BarChartIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "SKILLS": ""}</a></Link>
            <Link href={'/contacts'}><a className={router.pathname === "/contacts" ? styles.active : styles.item}><ContactsIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "CONTACTS": ""}</a></Link>
            <Link href="https://drive.google.com/file/d/1haZIF9tM6l613hTYRMmLSO1klMuJL6-h/view?usp=sharing" passHref={true}><button className='cvBtn'><ReceiptIcon style={{marginBottom:'-5px'}}/>{width >= breakpoint ? "RESUME": ""}</button></Link>
        </nav>
        <main style={{zIndex:200}}>
            {children}
        </main>
    </div>);
};
export default MainLayout;