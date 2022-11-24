import './Image.css'

const Image = props => {
return <img className='card-img' src={props.data.avatar}></img>
}

export default Image;