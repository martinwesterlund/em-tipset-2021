import MatchBox from "../components/MatchBox";
import backend from '../data/data'

const matchresultat = ({ matches }) => {
  return (
    <div className="w-screen min-h-screen bg-em-green-default pt-32 p-6 flex flex-col items-center">
      <h1>MATCHRESULTAT</h1>
      {matches.map((match) => (
        <MatchBox match={match}></MatchBox>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${backend}/fixtures`);
  const data = await res.json();

  return {
    props: {
      matches: data,
    },
  };
};

export default matchresultat;
