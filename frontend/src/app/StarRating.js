import '@fortawesome/fontawesome-free/css/all.min.css';
import './star.css'

export default function StarRating({ rating }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClassName = i <= rating ? 'fa fa-star checked' : 'fa fa-star';
            stars.push(<span key={i} className={starClassName}></span>);
        }
        return stars;
    };

    return <div>{renderStars()}</div>;
}