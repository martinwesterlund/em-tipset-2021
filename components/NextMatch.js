import { motion } from "framer-motion"

const NextMatch = ({ match }) => {
  return (
    <div className="w-full">
      {match && (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <span className="text-xs md:text-lg text-gray-400">Nästa match</span>
          <div className="flex w-full justify-center mt-4 px-4 text-xs md:text-lg">
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
            <motion.div initial={{ height: 0 }} animate={{ height: 76, transition: { delay:1, duration:1 }}} className="w-px bg-gray-300 h-24 transform mx-8 rotate-12">
              
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
      )}
    </div>
  );
};

export default NextMatch;