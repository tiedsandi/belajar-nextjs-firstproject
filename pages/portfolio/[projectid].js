import { useRouter } from 'next/router'

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query.projectid);
    console.log(router);

    //send a req to some backend server
    // to fetch the piece of data with an id or oruter.query.[name id]

    return (
        <div>
            <h1>The Portofolio Project Page</h1>
        </div>
    )
}

export default PortfolioProjectPage