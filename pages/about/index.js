import MainLayout from "../../components/MainLayout/MainLayout";
import AboutMe from "../../components/AboutMe/AboutMe";
const About=()=>{
    return<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./aboutBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <AboutMe/>
                        <div className="containerFooterAbout">
                            <p className="quotation">“Find out who you are and do it on purpose.”</p>
                            <p className="quotation" style={{color:"#fff", marginTop: "-83px", marginLeft:"740px"}}>Dolly Parton</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default About;