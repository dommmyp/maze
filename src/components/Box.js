import './Box.css'

const Box = (props) => {
   return (
      <div className='gridBox'>{props.i},{props.j}</div>
   );

}

export default Box;