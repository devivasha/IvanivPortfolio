import styles from "./ResumeItem.module.css";
import '@material-ui/core';
const ResumeItem=()=>{
    return (<div className={styles.containerResume}>
        <div className={styles.containerItem}>
            <div className={styles.header}><div className={styles.text}>HTML</div></div>
           <div style={{display: "flex", marginTop:"10px"}}>
               <img className={styles.img} src='./html5.png'/>
               <img className={styles.img} src='./jsxx.png'/>

           </div>
            <div className={styles.header2}><div className={styles.text}>CSS</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./css3.png'/>
                <img className={styles.img} src='./sass.png'/>

            </div>
            <div className={styles.header2}><div className={styles.text}>Javascript</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./javascriptl.png'/>
                <img className={styles.img} src='./ts.png'/>

            </div>
        </div>
        <div className={styles.containerItem}>
            <div className={styles.header}><div className={styles.text}>Frameworks</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./react.png'/>
                <img className={styles.img} src='./angular.png'/>
            </div>
            <div className={styles.header2}><div className={styles.text}>Frameworks</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./materila.png'/>
                <img className={styles.img} src='./rxjs.png'/>
            </div>

            <div className={styles.header2}><div className={styles.text}>Frameworks</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./next.png'/>
                <img className={styles.img} src='./bootstrap.png'/>

            </div>
        </div>
        <div className={styles.containerItem}>
            <div className={styles.header}><div className={styles.text}>Build Tools</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./gulp.png'/>
                <img className={styles.img} src='./webpackl.png'/>
            </div>
            <div className={styles.header2}><div className={styles.text}>Back-End</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./java.png'/>
                <img className={styles.img} src='./spring.png'/>
            </div>
            <div className={styles.header2}><div className={styles.text}>DataBases</div></div>
            <div style={{display: "flex", marginTop:"10px"}}>
                <img className={styles.img} src='./postgresql.png'/>
                <img className={styles.img} src='./mongodb.png'/>
            </div>
        </div>
    </div>);
};
export default ResumeItem;
