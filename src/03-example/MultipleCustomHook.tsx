import { useFetch } from "../hooks/useFetch";
import { useCounter } from '../hooks/useCounter';
import { BreakingBadResponse } from "../interfaces/breakingBadResponse.interface";

export const MultipleCustomHook = () => {
    const {counter, increment} = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`

    const { data, isLoading } = useFetch<BreakingBadResponse[]>(url);

    const {author, quote} = (!!data && data[0]) as BreakingBadResponse;

    return (
        <div className="mt-3 mx-5">
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {isLoading || !data ?
                (
                    <div className="alert alert-info text-center">Loading...</div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-1">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )}

                <button className="btn btn-primary" onClick={() => increment(1)}>Next quote</button>
        </div>
    )
}
