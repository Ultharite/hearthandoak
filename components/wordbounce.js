import { InView } from 'react-intersection-observer'

import { motion } from 'framer-motion'

const Wordbounce = ({ children, splitter = 'letters', triggeronce = true, className }) => {
  const title = children

  let stagger = 0.06

  if (splitter === 'words') {
    stagger = 0.1
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: 0.1 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, translateY: 16 },
    visible: { opacity: 1, translateY: 0 },
  }
  
  let titleSplit = ''

  if (splitter === 'letters') {
    titleSplit = title.split('').map((letter, l) => {
      return (
        <motion.span variants={letterVariants} key={l}>
          {letter}
        </motion.span>
      )
    })
  }

  if (splitter === 'words') {
    titleSplit = title.split(' ').map((letter, l) => {
      return (
        <motion.span variants={letterVariants} key={l}>
          {letter}&nbsp;
        </motion.span>
      )
    })
  }

  return (
    <motion.div
      className={`wordbounce ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 'all', once: triggeronce }}
      aria-label={title}
    >
      {titleSplit}
    </motion.div>
  )
}

export default Wordbounce
