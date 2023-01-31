import { Card, Button } from 'react-bootstrap'
import { useFavoritesContext } from '../context/FavoritesContext'

export default function PhotoCard({ info }) {

    const { addFavorites } = useFavoritesContext()



    return (
        <div>
            <Card >
{/* style={{ width: '20rem' }} */}
                <Card.Img className='' variant="top" src={info.src?.medium} />
                <Card.Body>
                    <Card.Text className='Card-Title h5'> {info.alt} - {info.photographer}</Card.Text>
                    <Card.Text className=''>{info.photographer_url}</Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button className='' variant="primary" onClick={() => addFavorites(info)}>Like</Button>
                        <Button className='' variant="danger" onClick={() => addFavorites(info)}>Disslike</Button>
                    </div>


                </Card.Body>
            </Card>

        </div>
    )
}