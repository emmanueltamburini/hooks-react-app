interface Props {
    quote: string;
    author: string;
}
export const Quote = ({author, quote}: Props) => {
  return (
    <blockquote className="blockquote text-end">
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}
