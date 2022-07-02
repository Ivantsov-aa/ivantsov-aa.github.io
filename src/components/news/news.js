import { useLocation } from "react-router-dom";

const NewsPage = ({ news }) => {
    const location = useLocation();
    const currentLocation = location.pathname.substring(6);

    return (
        <section className='news'>
            {news.map((article, i) => {
                return article.path === currentLocation &&
                    <div key={i}>
                        <div className='article'>
                            {
                                article.content.map((item, i) => (
                                    <div className='article_block' key={i}>
                                        <img src={item.img} alt='news-pic' />
                                        <div>
                                            {
                                                item.title && item.date &&
                                                <>
                                                    <h2>{item.title}</h2>
                                                    <p>{item.date}</p>
                                                </>
                                            }
                                            {
                                                item.texts.map((text, i) => (
                                                    <p key={i}>{text}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            })}
        </section>
    )
}

export default NewsPage;