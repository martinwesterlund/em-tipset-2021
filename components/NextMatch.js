import { motion } from "framer-motion"

const NextMatch = ({ match }) => {
  return (
    <div className="w-full">
      {match.id != 99 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span className="text-xs md:text-lg text-em-green-dark">Nästa match</span>
          <div className="flex w-full items-center justify-center mt-4 px-4 text-xs md:text-lg">
            <div className="w-1/3 flex flex-col justify-center items-center">
              <motion.img
                initial={{scale:0}}
                animate={{scale:1, transition: {delay:1}}}
                className="w-12 h-12 rounded-full object-cover shadow-md"
                src={`/images/flags/${match.home_team.toLowerCase()}.svg`}
                alt=""
              />
              <span className="mt-4">{match.home_team}</span>
            </div>
            <motion.div initial={{ height: 0 }} animate={{ height: 80, transition: { delay:1, duration:1 }}} className="w-px bg-em-green-light h-full transform mx-8">
              
            </motion.div>
            <div className="w-1/3 flex flex-col justify-center items-center">
              <motion.img
              initial={{scale:0}}
              animate={{scale:1, transition: {delay:1.2}}}
                className="w-12 h-12 rounded-full object-cover shadow-md"
                src={`/images/flags/${match.away_team.toLowerCase()}.svg`}
                alt=""
              />
              <span className="mt-4">{match.away_team}</span>
            </div>
          </div>
        </div>
      ) : <div className="w-full h-full flex flex-col justify-center items-center py-4">
        {match.message}</div>}
    </div>
  );
};

export default NextMatch;
