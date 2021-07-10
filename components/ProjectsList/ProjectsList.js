import styles from "../ProjectsList/ProjectsList.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import YouTubeIcon from '@material-ui/icons/YouTube';
import 'react-awesome-slider/dist/styles.css';

const projects = [
    {   id:1,
        photo1: "./portfolio.png",
        href1: "https://github.com/devivasha/IvanivPortfolio",
        href2: "",
        href3: "",
        title: "Private Portfolio",
        tex: "Next JS, React, Material Ui, SSR"
    },
    {   id:2,
        photo1: "./crm.png",
        href1: "https://github.com/CodeVaDOs/final-fs11",
        href2: "https://dev-fs11-final-project.herokuapp.com",
        href3: "",
        title: "crm booking system",
        tex: "React, Redux, Material Ui, Java"
    },
    {   id:3,
        photo1: "./crop2.png",
        href1: "https://github.com/devivasha/Front-End-Projects/tree/master/Photo%20Editor/final_project",
        href2: "https://cropman.io/",
        href3: "https://www.youtube.com/watch?v=crUPnZioX8Q&feature=emb_logo",
        title: "Batch Image Editor",
        tex: "React, Redux, Material Ui, Node JS  "
    },
    {   id:4,
        photo1: "./movie2.png",
        href1: "https://github.com/devivasha/Natalia-Ivaniv_0103",
        href2: "https://devivasha.github.io/Natalia-Ivaniv_0103/",
        href3: "",
        title: "Movie App",
        tex: "HTML5, SCSS, Vanilla JS"
    },
    {   id:5,
        photo1: "./shop1.png",
        href1: "https://github.com/devivasha/Front-End-Projects/tree/master/Online%20shop",
        href2: "https://devivasha.github.io/online_shop/build/",
        href3: "https://www.youtube.com/watch?v=kwmEB-bzWic&feature=youtu.be",
        title: "ONLINE SHOP",
        tex: "HTML5, SCSS, JS, Bootstrap 4, Gulp"
    },
    {   id:6,
        photo1: "./ham3.png",
        href1: "https://github.com/devivasha/Front-End-Projects/tree/master/Landing%20page%20",
        href2: "https://devivasha.github.io/landing_page/",
        href3: "https://www.youtube.com/watch?v=VvNmbcfHg7E&feature=youtu.be",
        title: "ham landing page",
        tex: "HTML5, CSS3, JavaScript"
    },
]

const ProjectsList =()=> {
    const AutoplaySlider = withAutoplay(AwesomeSlider)
    return (<div className="containerProjects">
        {projects.map(i=>
            <div  key={i.id} className={styles.container}>
                <div className={styles.imgWrapper}>
                    <div>
                        <img style={{width: "300px", height: "300px"}} src={i.photo1}/>
                        {/*<AutoplaySlider*/}
                        {/*    play={true}*/}
                        {/*>*/}
                        {/*    <div data-src={i.photo1} />*/}
                        {/*    <div data-src={i.photo2}/>*/}
                        {/*    <div data-src={i.photo3} />*/}
                        {/*    <div data-src={i.photo4} />*/}
                        {/*</AutoplaySlider>*/}
                    </div>
                    <h3 className={styles.text}>{i.tex}</h3>
                    <h2>{i.title}</h2>
                    <ul>
                        <li><a href={i.href1} target="_blank"><i><GitHubIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href2} target="_blank"><i><LinkIcon style={{marginTop:"10px"}}/></i></a></li>
                        {/*<li><a href={i.href3} target="_blank"><i><YouTubeIcon  style={{marginTop:"10px"}}/></i></a></li>*/}
                    </ul>
                </div>
            </div>
        )}
    </div>);
};
export default ProjectsList;
