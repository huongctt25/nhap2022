import { useQuery } from "react-query";
import Card from "../components/card";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const Cases = () => {
  console.log("render");
  const { data } = useQuery("people", fetchPeople);

  if (!data) return <h5>Cannot find data</h5>;
  // console.log(data.results);
  const list = data.results.map((people, index) => (
    <Card name={people.name} height={people.height} key={index} />
  ));

  return (
    <>
      <div className="container"> {list}</div>
    </>
  );
};

export default Cases;
