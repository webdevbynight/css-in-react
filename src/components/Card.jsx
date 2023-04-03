import Gallery from "./Gallery";
import Rate from "./Rate";
import images from '../data/images';

const Card = () =>
{
    const template =
    (
        <section className="card">
            <h1 className="title">Title</h1>
            <Gallery images={images} />
            <p className="rating">4 on 5 (413)</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus necessitatibus voluptatem voluptas eius eligendi ipsum commodi nam saepe culpa, suscipit maxime recusandae deleniti corrupti enim impedit, magnam voluptate quibusdam ut.</p>
            <Rate />
        </section>
    );
    return template;
}

export default Card;