import MyPDFs from "../components/MyPDFs";
import pdflinks from "../../data/links.js"

export default function page() {
  return (
    <div>
        <MyPDFs alllinks={pdflinks} linkType={''}/>
    </div>
  )
}
