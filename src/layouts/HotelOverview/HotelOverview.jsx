import "./HotelOverview.scss";

import Gallery from "../../components/Gallery/Gallery";
import Overview from "../../components/Overview/Overview";

function HotelOverview() {
  const imgs = [
    "img/pexels-andy-vu-3244513.jpg",
    "/img/pexels-eberhard-grossgasteiger-572897.jpg",
    "/img/pexels-frans-van-heerden-624015.jpg",
  ];
  return (
    <main className="hotel-view">
      <div className="gallery">
        {imgs.map((img, i) => (
          <Gallery key={i + 1} alt={`photo${i + 1}`} src={img} />
        ))}
      </div>
      <Overview />
    </main>
  );
}

export default HotelOverview;
