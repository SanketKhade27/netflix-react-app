import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
    return (
        <div className="featured">
            <img src="https://images.unsplash.com/photo-1502389343615-b07268585dae?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzl8MjQzNzc2Mnx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="info">
                <img src="https://wallpapercave.com/wp/ydhMobg.jpg" alt="" />
                <span className="desc">
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                    lorem ipsum dolor sit amet, consectetur adip
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
