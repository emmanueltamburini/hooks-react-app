import { Quote, LoadingQuote } from ".";
import { useFetch, useCounter } from "../hooks";
import { BreakingBadResponse } from "../interfaces/breakingBadResponse.interface";

export const MultipleCustomHook = () => {
    const { counter, increment } = useCounter(1);

    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`

    const { data, isLoading } = useFetch<BreakingBadResponse[]>(url);

    const { author, quote } = (!!data && data[0]) as BreakingBadResponse;

    return (
        <div className="mt-3 mx-5">
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)}>Next quote</button>
        </div>
    )
}
