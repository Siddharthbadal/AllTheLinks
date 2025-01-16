import MyPDFs from "../components/MyPDFs";
import videos from "../../data/videos.js"

export const metadata = {
  title: "Videos | Youtube",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};

export default function VideosPage() {
  return (
    <div>
      
        <MyPDFs alllinks={videos} linkType={''}/>
    </div>
  )
}
