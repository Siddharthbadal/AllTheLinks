import MyPDFs from "../components/MyPDFs";
import videos from "../../data/videos.js"
import SectionHeading from "../components/SectionHeading";

export default function VideosPage() {
  return (
    <div>
      
        <MyPDFs alllinks={videos} linkType={''}/>
    </div>
  )
}
