import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../LoadingSpinner";
import { Modal } from "../Modal";
import "./style.css";

export const GalleryItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState(null);
  const [selectedAssetImg, setSelectedAssetImg] = useState(null);
  const [selectedAssetName, setSelectedAssetName] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  let { categoryId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_KEY}/Gallery?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data && data.records.length > 0) {
          const newData = data.records.filter(
            (el) => el.fields.Category.toLowerCase() === categoryId
          );
          setGalleryData(newData.reverse());
        } else {
          return;
        }
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("airtable fetch failed: ", err);
      });
  }, [categoryId]);

  const onAssetClick = (asset) => {
    setSelectedAssetId(asset.id);
    setSelectedAssetImg(asset.fields?.Asset[0]?.url);
    setSelectedAssetName(asset.fields?.Name);
  };

  const onCloseModal = () => {
    setSelectedAssetId(null);
    setSelectedAssetImg(null);
    setSelectedAssetName(null);
  };

  return (
    <div id="gallery-items" className="page">
      {isLoading && !galleryData.length && <LoadingSpinner />}
      {!isLoading && !galleryData.length && (
        <p id="empty-gallery-items-text">
          Sorry, I haven't uploaded any content for this section yet. Please
          check back later.
        </p>
      )}
      <div id="gallery-items-inner-container">
        {galleryData.map((item) => {
          if (
            item.fields.Active &&
            item.fields?.Asset[0]?.url &&
            item.fields?.Name
          ) {
            return (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => onAssetClick(item)}
              >
                <img src={item.fields.Asset[0].url} alt={item.fields.Name} />
              </div>
            );
          } else {
            return null;
          }
        })}
        {!!selectedAssetId && (
          <Modal
            selectedAssetId={selectedAssetId}
            selectedAssetImg={selectedAssetImg}
            selectedAssetName={selectedAssetName}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
    </div>
  );
};
