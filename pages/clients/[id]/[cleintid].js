import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The Specific Projects of a Given Clients</h1>
        </div>
    );
}

export default SelectedClientProjectPage