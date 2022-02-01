//create function to dnamicly inlcude image and an about
function About({image = "https://via.placeholder.com/215", about}) {
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;