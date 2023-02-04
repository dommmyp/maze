import './Box.css'

const Box = (props) => {
   return (
      <div className='gridBox'>{props.index}</div>
   );

}

export default Box;