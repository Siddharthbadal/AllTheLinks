import MyPDFs from "@/app/components/MyPDFs";
import techpdflinks from "@/data/techpdflinks.js"
import TechNav from "@/app/components/TechNav";

export default function page() {
  return (
    <div>
        {/* <TechNav  /> */}
        <MyPDFs alllinks={techpdflinks} linkType="Text"/>
    </div>
  )
}
