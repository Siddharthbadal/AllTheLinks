import MyPDFs from "../components/MyPDFs";
import pdflinks from "../../data/links.js"
import SectionHeading from "../components/SectionHeading";

export default function BooksPage() {
  return (
    <div>
      
        <MyPDFs alllinks={pdflinks} linkType={''}/>
    </div>
  )
}
