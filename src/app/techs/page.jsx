import MyPDFs from "../components/MyPDFs";
import techpdflinks from "@/data/techpdflinks.js"
import TechNav from "../components/TechNav";

export default function page() {
  return (
    <div>
        {/* <TechNav  /> */}
        <MyPDFs alllinks={techpdflinks} linkType=''/>
    </div>
  )
}
