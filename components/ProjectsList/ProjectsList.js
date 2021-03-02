import styles from "../ProjectsList/ProjectsList.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import YouTubeIcon from '@material-ui/icons/YouTube';
import 'react-awesome-slider/dist/styles.css';

const projects = [
    {   id:1,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo4: "./crop4.png",
        href1: "",
        href2: "",
        href3: "",
        title: "Private Portfolio",
        tex: "Next JS, React, Material Ui, SSR"
    },
    {   id:2,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo4: "./crop4.png",
        href1: "",
        href2: "",
        href3: "",
        title: "crm booking system",
        tex: "React, Redux, Material Ui, Java"
    },
    {   id:3,
        photo1: "./crop1.png",
        photo2: "./crop2.png",
        photo3: "./crop4.png",
        photo4: "./crop5.png",
        href1: "https://github.com/devivasha/Front-End-Projects/tree/master/Photo%20Editor/final_project",
        href2: "https://cropman.io/",
        href3: "https://www.youtube.com/watch?v=crUPnZioX8Q&feature=emb_logo",
        title: "Batch Image Editor",
        tex: "React, Redux, Material Ui, Node JS  "
    },
    {   id:4,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo4: "./crop4.png",
        href1: "",
        href2: "",
        href3: "",
        title: "Movie App",
        tex: "HTML5, SCSS, Vanilla JS"
    },
    {   id:5,
        photo1: "./shop1.png",
        photo2: "./shop2.png",
        photo3: "./shop3.png",
        photo4: "./shop4.png",
        href1: "https://github.com/devivasha/Front-End-Projects/tree/master/Online%20shop",
        href2: "https://devivasha.github.io/online_shop/build/",
        href3: "https://www.youtube.com/watch?v=kwmEB-bzWic&feature=youtu.be",
        title: "ONLINE SHOP",
        tex: "HTML5, SCSS, JS, Bootstrap 4, Gulp"
    },
    {   id:6,
        photo1: "./ham3.png",
        photo2: "./ham2.png",
        photo3: "./ham1.png",
        photo4: "./ham4.png",
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
                        <AutoplaySlider
                            play={true}
                        >
                            <div data-src={i.photo1} />
                            <div data-src={i.photo2}/>
                            <div data-src={i.photo3} />
                            <div data-src={i.photo4} />
                        </AutoplaySlider>
                    </div>
                    <h3 className={styles.text}>{i.tex}</h3>
                    <h2>{i.title}</h2>
                    <ul>
                        <li><a href={i.href1} target="_blank"><i><GitHubIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href2} target="_blank"><i><LinkIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href3} target="_blank"><i><YouTubeIcon  style={{marginTop:"10px"}}/></i></a></li>
                    </ul>
                </div>
            </div>
        )}

    </div>);
};
export default ProjectsList;