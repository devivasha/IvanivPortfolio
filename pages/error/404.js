import MainLayout from '../../components/MainLayout/MainLayout';
const ErrorPage =()=>{
    return(<>
        <div className="gradient" style={{backgroundImage: `url('./carBig.jpg')` }}>
            <div>
                <MainLayout>
                    <h1 className='textBig'>404</h1>
                    <p className='textSmall'> Page not found :(</p>
                    <div className="containerFooter">
                       <p className="quotation">"An error  does not become a mistake until you refuse to correct it."</p>
                        <p className="quotation" style={{color:"#fff"}}> John F. Kennedy</p>
                    </div>
                </MainLayout>
            </div>
        </div>
    </>);
};
export default ErrorPage
