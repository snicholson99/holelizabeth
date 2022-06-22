import { useEffect, useState } from "react";
import "./style.css";

export const AboutMe = () => {
  const [textData, setTextData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_KEY}/about?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let newData = {};
        data.records.forEach((record) => {
          Object.assign(newData, { [record.fields.Key]: record.fields.Text });
        });
        setTextData(newData);
      })
      .catch((err) => {
        console.error("airtable fetch failed: ", err);
      });
  }, []);

  return (
    <div id="about-me" className="page">
      <img src="assets/about-me/pencils.jpg" id="about-me-image" alt="" />
      <div id="about-me-content">
        {textData?.title && <h1>{textData.title}</h1>}
        {textData?.subheading && (
          <p id="about-me-subheading">{textData.subheading}</p>
        )}
        {textData?.paragraph1 && (
          <p className="about-me-body">{textData.paragraph1}</p>
        )}
        {textData?.paragraph2 && (
          <p className="about-me-body">{textData.paragraph2}</p>
        )}
      </div>
    </div>
  );
};
