import { useEffect, useState } from "react";
import "./style.css";

export const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_KEY}/gallery?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setGalleryData(data.records.reverse());
      })
      .catch((err) => {
        console.error("airtable fetch failed: ", err);
      });
  }, []);

  return (
    <div id="gallery" className="page">
      <div id="gallery-content">
        {galleryData.map((asset) => {
          if (asset.fields.Name && asset.fields?.Image) {
            return (
              <div key={asset.id} className="gallery-asset">
                <img
                  src={asset.fields?.Image[0]?.url}
                  alt={asset.fields.Name}
                />
                <p className="gallery-asset-name">{asset.fields.Name}</p>
                <p className="gallery-asset-size">{asset.fields.Subtext}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
