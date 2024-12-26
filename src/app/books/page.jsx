import MyPDFs from "../components/MyPDFs";
import pdflinks from "../../data/links.js"

export default function BooksPage() {
  return (
    <div>
        <MyPDFs alllinks={pdflinks} linkType={''}/>
    </div>
  )
}
