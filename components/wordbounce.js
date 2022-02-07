import { InView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

const Wordbounce = ({ children }) => {
  const title = children

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  }

  const letterVariants = {
    hidden: { opacity: 0, translateY: 16, scale: 0.5 },
    visible: { opacity: 1, translateY: 0, scale: 1 },
  }

  const titleSplit = title.split('').map((letter, l) => {
    return (
      <motion.span variants={letterVariants} key={l}>
        {letter}
      </motion.span>
    )
  })

  return (
    <motion.div
      className="wordbounce"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 'all' }}
    >
      {titleSplit}
    </motion.div>
  )
}

export default Wordbounce
