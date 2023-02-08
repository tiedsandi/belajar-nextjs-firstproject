import { useRouter } from "next/router";
import Link from "next/link";


function ClientsPage() {
    const router = useRouter();
    console.log(router.query);

    const clients = [
        { id: 'max', name: 'Maximumj' },
        { id: 'manu', name: 'manu' }
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <Link href='/'>Back</Link>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[id]', //[id] harus sama kaya foldernya
                            query: { id: client.id }
                        }} >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientsPage