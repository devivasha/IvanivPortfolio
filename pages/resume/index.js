import Grid from '@material-ui/core/Grid';
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
                        <div className="containerFooter">
                            <p className="quotation">"Your attitude, not your aptitude, will determine your altitude."</p>
                            <p className="quotation2">Zig Ziglar</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default Resume;
