import styles from './ContactsList.module.css'
import '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TelegramIcon from '@material-ui/icons/Telegram';

const ContactsList=()=>{
    return (<div className="containerContacts">
        <div>
           <div className={styles.container}>
               <div className={styles.card}>
                   <div className={styles.imgBx}>
                        <LinkedInIcon style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                   </div>
                   <div className={styles.content}>
                       <a className={styles.href} href="https://www.linkedin.com/in/nivaniva" target="_blank">nivaniva</a>
                       <p>This is where I network and build my professional portfolio.</p>
                   </div>
               </div>
           </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBxM}>
                        <DraftsIcon style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                    </div>
                    <div className={styles.content}>
                        <a className={styles.hrefF} href="mailto: nat_ivaniv@ukr.net" target="_blank">nat_ivaniv@ukr.net</a>
                        <p>This is where you can send me emails with job offers.</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBxGP}>
                        <GitHubIcon style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                    </div>
                    <div className={styles.content}>
                        <a className={styles.hrefGP} href="https://github.com/devivasha?tab=repositories" target="_blank">devivasha</a>
                        <p>This is where I share code and work on projects.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBxF}>
                        <TelegramIcon  style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                    </div>
                    <div className={styles.content}>
                        <a className={styles.hrefF} href="https://t.me/<1159492094>" target="_blank">ID : 1159492094 </a>
                        <p>This is where you can write me messages and receive prompt answer.</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBxT}>
                        <FacebookIcon style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                    </div>
                    <div className={styles.content}>
                        <a className={styles.hrefT} href="https://www.facebook.com/natalia.ivaniv.7/" target="_blank">Natalia Ivaniv</a>
                        <p>This is where I read news and network with different social groups.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBxG}>
                        <PhoneIphoneIcon style={{color:"#fff", fontSize: "100px", margin:"15% 35%"}}/>
                    </div>
                    <div className={styles.content}>
                        <a className={styles.hrefG} href="tel:+38097-530-5852">+38(097)5305852</a>
                        <p>This is where you can call me anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
export default ContactsList;