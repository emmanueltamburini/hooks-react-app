import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                onClick={() => {
                    if (setUser) {
                        setUser({
                            id: 1,
                            email: 'test@test.com',
                            name: 'name'
                        });
                    }
                }}
                className="btn btn-primary"
            >
                Set user
            </button>
        </>
    )
}
