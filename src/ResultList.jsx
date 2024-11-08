import Result from "./Result";

function ResultList({ results }) {
  return (
    results &&
    results.results?.map((item, index) => {
      return <Result key={index} item={item} />;
    })
  );
}

export default ResultList;
