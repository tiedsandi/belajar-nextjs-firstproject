import { useRouter } from "next/router";

function ClientsProjectsPage() {
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler() {
        //load data...
        // router.push('/clients/max/projecta')
        router.push({
            pathname: '/clients/[id]/[cleintid]',
            query: {
                id: 'dodo',
                cleintid: 'mumu'
            }
        })
    }

    return (
        <div>
            <h1>The Projects of a Given Clients </h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientsProjectsPage