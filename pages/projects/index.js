import MainLayout from "../../components/MainLayout/MainLayout";

const Projects=()=>{
    return<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./projectsBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <div className="containerFooter">
                            <p className="quotation">“Happiness is the real sense of fulfillment that comes from hard work.”</p>
                            <p className="quotation" style={{color:"#fff"}}>Joseph Barbara</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default Projects;

