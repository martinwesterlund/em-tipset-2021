const NextMatch = ({ match }) => {
  return (
    <div className="w-full">
      {match && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span>Nästa match</span>
          <div className="flex w-full justify-center mt-4 px-4">
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img
                className="w-16 h-16 rounded-full object-cover shadow-md"
                src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
                alt=""
              />
              <span className="mt-4">{match.home_team}</span>
            </div>
            <div className="md:w-1/5 flex text-3xl justify-center items-center">
              -
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <img
                className="w-16 h-16 rounded-full object-cover shadow-md"
                src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
                alt=""
              />
              <span className="mt-4">{match.away_team}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextMatch;
