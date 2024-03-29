import { useEffect, useState } from "react";
import "./style.css";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_KEY}/about?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let newData = {};
        data.records.forEach((record) => {
          Object.assign(newData, {
            [record.fields.Key]:
              (record.fields.Image && record.fields.Image[0].url) ||
              record.fields.Text,
          });
        });
        setPageData(newData);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("airtable fetch failed: ", err);
      });
  }, []);

  return (
    <div id="about-me" className="page">
      {isLoading && !pageData && <LoadingSpinner />}
      <div id="about-me-content">
        {pageData?.title && <h1>{pageData.title}</h1>}
        {pageData?.subheading && (
          <p id="about-me-subheading">{pageData.subheading}</p>
        )}
        {pageData?.paragraph1 && (
          <p className="about-me-body">{pageData.paragraph1}</p>
        )}
        {pageData?.paragraph2 && (
          <p className="about-me-body">{pageData.paragraph2}</p>
        )}
      </div>
      {pageData?.image && (
        <img src={pageData.image} id="about-me-image" alt="" />
      )}
    </div>
  );
};
