const Entry = (props) => {
  return (
    <article className="entry">
      <img
        className="entry-img"
        src={props.src}
        alt={props.alt}
      />

      <section className="entry-content">
        <div className="entry-location">
          <span>{props.location}</span>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>

        <h2>{props.title}</h2>
        <p className="entry-date">{props.date}</p>
        <p className="entry-desc">{props.description}</p>
      </section>
    </article>
  );
};

export default Entry;
