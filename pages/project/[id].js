import {useRouter} from "next/router";

const Project=()=>{
    const router = useRouter()
    console.log(router)
    return <>
    <h1>Project # {router.query.id}</h1>
        </>
};
export default Project;