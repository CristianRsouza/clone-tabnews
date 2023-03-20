import { useParams } from 'react-router-dom'
import Header from '../header/header'
import './postpage.css'
function PostPage () {
const {postid} = useParams()
    return(
    <div className='postPage'>
        <Header />
        <div className='postContent'>
        <h1>{postid}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi eaque iste debitis nisi tempore vitae numquam corporis excepturi sed aspernatur expedita harum aliquam veritatis explicabo cumque, aut voluptas a et quis! Voluptatum maiores, beatae maxime amet fugiat numquam odit ea quisquam eum, blanditiis quos distinctio doloribus iste cum minus dolor! Perferendis unde, cupiditate hic vitae quae sed quam totam est nobis nam laudantium, doloribus voluptates quidem delectus quod. Consequatur quam maxime placeat voluptates? Culpa, at magnam quisquam quam minima ipsam illum ex, nemo mollitia architecto nulla atque molestiae asperiores quod similique deserunt officia optio consequuntur ea dolore, et magni earum aliquam? Exercitationem autem non id incidunt accusamus! A quidem labore aliquid unde, excepturi placeat quibusdam eveniet natus fugit earum!</p>
        </div>
    </div>
      )
}

export default PostPage