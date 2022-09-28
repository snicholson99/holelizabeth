import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./style.css";

export const Gallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_KEY}/Categories?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => setCategories(data.records))
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error("airtable fetch failed: ", err);
      });
  }, []);

  return (
    <div id="gallery" className="page">
      {isLoading && !categories.length && <LoadingSpinner />}
      {categories.map((event, index) => {
        if (
          event.fields.Active &&
          event.fields?.["Cover Image"] &&
          event.fields.Name
        ) {
          return (
            <Link
              to={`/holelizabeth/gallery/${event.fields.Name.toLowerCase()}`}
              key={event.id}
              className="gallery-event-item"
              data-event={event.fields.Name}
              style={{ zIndex: index + 2 }}
            >
              <img
                src={event.fields["Cover Image"][0].url}
                alt={event.fields.Name}
              />
              <p>{event.fields.Name}</p>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
