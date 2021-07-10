import '@material-ui/core';
import MainLayout from "../../components/MainLayout/MainLayout";
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
                    </MainLayout>
                </div>
            </div>
        </div>
    </>);
};
export default Contacts;
