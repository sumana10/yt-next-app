import VideoCard from "./VideoCard";

const VIDEOS = [{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
}, 
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
},
{
    title: "How to learn coding in 30 days | 30 day plan | Code with me",
    image: "pretty.jpg",
    thumbImage: "pretty.jpg",
    author: "Raman Singh",
    views: "100k",
    timestamp: "2 days ago"
} 

];


const VideoGrid = () =>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map((video) => (
                <div key={video.title}> {/* Added 'key' attribute for list rendering */}
                    <VideoCard
                        title={video.title}
                        image={video.image}
                        views={video.views}
                        timestamp={video.timestamp}
                    />
                </div>
            ))}
        </div>
    );
    
}

export default VideoGrid