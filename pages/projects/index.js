import MainLayout from "../../components/MainLayout/MainLayout";
import ProjectsList from '../../components/ProjectsList/ProjectsList'

const Projects=()=>{
    return<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./projectsBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <div className="center">
                            <ProjectsList/>
                        </div>
                        <div style={{width: "85%", margin: "0 auto"}}>
                            <p className="quotation">“Happiness is the real sense of fulfillment that comes from hard work.”
                                <span className="quotation2" style={{color:"#fff"}}>Joseph Barbara</span>
                            </p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default Projects;

