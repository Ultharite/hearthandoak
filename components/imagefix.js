/* eslint-disable @next/next/no-img-element */
const Image = (props) => {
  return <img className="imagefix" src={props.src} alt={props.alt}></img>
}

export default Image