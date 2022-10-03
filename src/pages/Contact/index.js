import "./style.css";

export const Contact = () => {
  return (
    <div id="get-in-touch" className="page">
      <p>Want something commissioned? Just drop me a request below!</p>
      <div id="get-in-touch-form-container">
        <form id="contact-form">
          <label>
            Full Name:
            <input name="Full Name" />
          </label>
          <label>
            E-mail:
            <input name="Email" />
          </label>
          <label>
            Message:
            <textarea name="Message"></textarea>
          </label>
          <input type="submit" id="contact-button" />
        </form>
      </div>
    </div>
  );
};
