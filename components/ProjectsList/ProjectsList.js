import styles from "../ProjectsList/ProjectsList.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css';

const projects = [
    {   id:1,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
    },
    {   id:2,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
    },
    {   id:3,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
    },
    {   id:4,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
    },
    {   id:5,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
    },
    {   id:6,
        photo1: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo2: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        photo3: "https://images.pexels.com/photos/1220757/pexels-photo-1220757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        href1: "",
        href2: "",
        title: "David James"
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
                        </AutoplaySlider>
                    </div>
                    <h2>{i.title}</h2>
                    <ul>
                        <li><a href={i.href1}><i><GitHubIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href1}><i><LinkIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href1}><i><GitHubIcon style={{marginTop:"10px"}}/></i></a></li>
                        <li><a href={i.href1}><i><LinkIcon style={{marginTop:"10px"}}/></i></a></li>
                    </ul>
                </div>
            </div>
        )}

    </div>);
};
export default ProjectsList;