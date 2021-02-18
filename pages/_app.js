import '../style.css';
import '@material-ui/core';
import Head from 'next/head'

export default function Application({Component, pageProps}){
    return (
        <>
            <Component {...pageProps}/>
            <style jsx global>{`
            html,
            body {
                font-family: 'Karla', sans-serif;
                font-max-size: 14px;
                margin: 0;
                padding: 0;}`
            }</style>
        </>
    );
}