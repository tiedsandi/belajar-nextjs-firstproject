import { useRouter } from "next/router";


function ClientsPage() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h1>The Clients Page</h1>
        </div>
    );
}

export default ClientsPage