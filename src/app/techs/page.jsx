import MyPDFs from "../components/MyPDFs";
import techpdflinks from "@/data/techpdflinks";

export const metadata = {
  title: "Techs | PDFs",
  description: "Collection of my favourite videos, links, books aand tutorials.",
};

export default function TechsPage() {
  return (
    <div>      
        <MyPDFs alllinks={techpdflinks} linkType={''}/>
    </div>
  )
}
