import { Link } from 'react-router-dom'
import '../styles/Home.css'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <h4>Sorry, the page you tried cannot be found</h4>
        <Link to='/' className='btn btn-warning btn-back'>
            Back Home
        </Link>
    </div>
  )
}

export default NotFound