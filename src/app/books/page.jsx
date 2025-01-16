import MyPDFs from "../components/MyPDFs";
import pdflinks from "../../data/links.js"

export const metadata = {
  title: "Books | PDFs",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};

export default function BooksPage() {
  return (
    <div>      
        <MyPDFs alllinks={pdflinks} linkType={''}/>
    </div>
  )
}
