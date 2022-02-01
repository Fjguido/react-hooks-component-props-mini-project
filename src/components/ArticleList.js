import Article from "./Article";

function ArticleList({posts}) {
    const articleArray = posts.map((post) => {
        return (
            <Article
            key={post.id}
            title={post.title} 
            preview={post.preview}
            date={post.date}
            minutes={post.minutes}
            />
        );
    });
        return <main>{articleArray}</main>;
        }
export default ArticleList;