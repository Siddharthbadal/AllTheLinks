import MyPDFs from "../components/MyPDFs";
import techpdflinks from "@/data/techpdflinks.js"
import SectionHeading from "../components/SectionHeading";


export default function page() {
  return (
    <div>
       
        <MyPDFs alllinks={techpdflinks} linkType=''/>
    </div>
  )
}
