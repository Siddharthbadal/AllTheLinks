import MyPDFs from "../components/MyPDFs";
import videos from "../../data/videos.js"

export default function VideosPage() {
  return (
    <div>
        <MyPDFs alllinks={videos} linkType={''}/>
    </div>
  )
}
