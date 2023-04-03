import { useState } from 'react';
import bullet from '../assets/select-bullet.svg';

const Gallery = ({ images }) =>
{
    let [currentImage, setCurrentImage] = useState(images[0]),
        { src, alt } = currentImage;
    const template =
    (
        <div className="gallery">
            <img src={src} alt={alt} width="500" height="375" />
            <nav>
                <ul>
                    {
                        images.map((image, index) =>
                        {
                            let { id } = image;
                            return (<li key={id}><button type="button" onClick={() => setCurrentImage(images[index])}><img src={bullet} alt={`Select image ${id}`} /></button></li>)
                        })
                    }
                </ul>
            </nav>
        </div>
    );
    return template;
}

export default Gallery;