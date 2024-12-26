import MyPDFs from "../components/MyPDFs";
import techpdflinks from "@/data/techpdflinks.js"


export default function page() {
  return (
    <div>
        {/* <TechNav  /> */}
        <MyPDFs alllinks={techpdflinks} linkType=''/>
    </div>
  )
}
