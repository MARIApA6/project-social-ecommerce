import "./ThreadCard.css";


function ThreadCard({ title, image, date, itemsCount, sourceUrl }) {
    return (
        <article className="threadCard">
            <img className="threadCard_img" src={image} alt={title} />

            <div className="threadCard_content">
                <h2 className="threadCard_title">{title}</h2>
                <p>{date}</p>
                <p>{itemsCount} items</p>
            </div>
        </article>
    );
}

export default ThreadCard;