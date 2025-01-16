import MyPDFs from "../components/MyPDFs";
import techpdflinks from "@/data/techpdflinks.js"

export const metadata = {
  title: "Tech Blogs",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};


export default function page() {
  return (
    <div>
       
        <MyPDFs alllinks={techpdflinks} linkType=''/>
    </div>
  )
}
