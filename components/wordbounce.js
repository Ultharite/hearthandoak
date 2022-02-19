import { motion } from 'framer-motion'

const Wordbounce = ({
  children,
  splitter = 'letters',
  triggeronce = true,
  className,
  speed = 0.3,
}) => {
  const title = children

  let stagger = 0.03

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
    visible: { opacity: 1, translateY: 0, transition: { duration: speed, type: 'spring', stiffness: 200, damping: 16, mass: 0.5 } },
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
    let wordSplit = title.split(' ')
    titleSplit = wordSplit.map((letter, l) => {
      return (
        <motion.span variants={letterVariants} key={l}>
          {wordSplit.length !== l + 1 ? `${letter} ` : `${letter}`}
        </motion.span>
      )
    })
  }

  if (splitter === 'full') {
    return (
      <motion.span
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        {title}
      </motion.span>
    )
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
