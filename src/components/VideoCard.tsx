const VideoCard = (props:any) => {

    return (
        <div className="p-3 cursor-pointer">
            <img src={props.image} className="rounded-xl"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1"><img
                    className={"rounded-full w-10 h-10"} src={props.image} /></div>
                <div className="col-span-11 pl-2">
                    <div>{props.title}</div>
                    <div className="col-span-11 text-gray-500">Psych2Go</div>
                    <div className="col-span-11 text-gray-500">{props.views} views | {props.timestamp} ago</div> 
                   
                </div>
            </div>
        </div>
    )
}

export default VideoCard;