import MainLayout from "../../components/MainLayout/MainLayout";

const About=()=>{
    return<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./aboutBig.jpg')` }}>
                <div>
                    <MainLayout>

                        <div className="containerFooter">
                            <p className="quotation">“Find out who you are and do it on purpose.”</p>
                            <p className="quotation" style={{color:"#fff"}}>Dolly Parton</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default About;