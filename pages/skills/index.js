import ResumeItem from '../../components/Resume/ResumeItem';
import MainLayout from "../../components/MainLayout/MainLayout";
const Resume=()=>{
    return<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./resumeBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <div className="center">
                            <ResumeItem/>
                        </div>
                        <div style={{width: "70%", margin: "165px auto"}}>
                            <p className="quotation">"Your attitude, not your aptitude, will determine your altitude."
                                <span className="quotation2">Zig Ziglar</span>
                            </p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default Resume;
