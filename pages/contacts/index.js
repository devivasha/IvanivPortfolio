import '@material-ui/core';
import MainLayout from "../../components/MainLayout/MainLayout";
import Grid from "@material-ui/core/Grid";
import ContactsList from '../../components/ContactsList/ContactsList'


const Contacts=()=>{
    return (<>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./contactsBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <div className="center">
                            <ContactsList/>
                        </div>
                        <div className="containerFooter">
                            <p className="quotation">“Every mind needs friendly contact with other minds, for food of expansion and growth.”</p>
                            <p className="quotation2">Napoleon Hill</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>);
};
export default Contacts;
