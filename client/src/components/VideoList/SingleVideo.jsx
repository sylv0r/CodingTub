export default function SingleVideo({video}) {

    //state

    //comportement

    //render
    return (
        <div id="singleVid" key={video.id}>
            <img src="https://www.howtogeek.com/wp-content/uploads/2021/08/YouTube-logo-hero-1.png?height=200p&trim=2,2,2,2&crop=16:9" alt="" width="300" /> <br />

            {video.title}<br /> 
         
            {video.views} vues
         </div>
    )

}