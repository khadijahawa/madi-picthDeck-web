import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        title="Map"
        defer
        src="https://maps.google.com/maps?q=R%C3%A5dhusstr%C3%A6de%208,%201466%20K%C3%B8benhavn&t=&z=13&ie=UTF8&iwloc=&output=embed"
        height="400"
        width="400"
        style={{ border: "0", width: "100%", height: "500px" }}
        allowFullScreen=""
        loading="auto"
        allow="accelerometer; autoplay;
        encrypted-media; gyroscope;
        picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Map;
