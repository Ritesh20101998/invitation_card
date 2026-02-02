import React from "react";
import invitationDetails from "./InvitationDetails";
import "./InvitationCard.css";

const InvitationCard = () => {
    const {
        // title,
        mantra1,
        mantra2,
        aashirvad,
        event,
        date,
        time,
        venue,
        hosts,
        request
    } = invitationDetails;

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        venue
    )}`;

    return (
        <div className="invitation-container">
        <div className="invitation-card">

            {/* Decorative Bells */}
            <div className="bell bell-top-left">🔔</div>
            <div className="bell bell-top-right">🔔</div>
            <div className="bell bell-bottom-left">🔔</div>
            <div className="bell bell-bottom-right">🔔</div>

            <div className="inner-border">

            {/* Ganesh */}
            <div className="ganesh-section">
                <img src="/ganesh.jpg" alt="Ganesh" className="ganesh-image" />
            </div>

            {/* Mantras */}
            <div className="mantras-section">
                <div className="mantra">{mantra1}</div>
                <div className="mantra">{mantra2}</div>
            </div>

            {/* Aashirvad */}
            <div className="event-details">
                <div className="hosts-label">❁ आशिर्वाद ❁</div> {/* ✅ changed */}
                <div className="hosts-name">{aashirvad}</div>
            </div>

            {/* Title */}
            <div className="title-section">
                {/* <h1 className="title">{title}</h1> */}
                <span className="event-name">{event}</span>
            </div>

            {/* Main Content */}
            <div className="content-section">
                <p className="introduction">
                स. न. वि. वि. आमच्या येथे श्री हरी कृपेने, नवीन वास्तूची,
                <br />
                {/* <span className="event-name">{event}</span> */}
                वास्तुशांती, गृहप्रवेश व सत्यनारायण पूजा<br />
                {/* <br /> */}
                <strong>{date}</strong> | <strong>{time}</strong>
                <br />
                या शुभमुहूर्तावर आयोजित करण्यात येत आहे.
                <br />
                तरी आपण सर्वांनी सहकुटुंब सहपरिवार उपस्थित रहावे हि विनंती…
                </p>

                {/* Venue */}
                <div className="event-details">
                <div className="detail-label">❁ स्थळ ❁</div> {/* ✅ changed */}
                <div className="detail-value venue-text">
                    <strong>{venue.split("\n").map((line, index) => (  // ✅ changed
                    <div key={index}>{line}</div>
                    ))}</strong>
                </div>
                </div>

                {/* Hosts */}
                <div className="event-details">
                <div className="hosts-label">❁ निमंत्रक ❁</div> {/* ✅ changed */}
                <div className="hosts-name">
                    {hosts.split(" व ").map((host, index) => ( // ✅ changed
                    <div key={index}>{host}</div>
                    ))}
                </div>
                </div>
            </div>

            {/* Request */}
            <div className="request-box">
                {request}
            </div>

            {/* Google Maps */}
            <div className="button-section">
                <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
                >
                📍 Google Maps वर पहा
                </a>
            </div>

            </div>
        </div>
        </div>
    );
};

export default InvitationCard;
