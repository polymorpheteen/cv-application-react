import "@/styles/PrintableInfo.css";

function PrintableInfo({ data }) {
  return (
    <>
      <main className="cv">
        {/* Header Section */}
        <header className="cv-header">
          <div>
            <h1 className="cv-name">
              {data?.firstname || "FirstName"} {data?.lastname || "LastName"}
            </h1>
            <p className="cv-role">{data?.role || "Your Role"}</p>
          </div>
          <ul className="cv-contact">
            {data?.email && <li>{data.email}</li>}
            {data?.phone && <li>{data.phone}</li>}
            <li>City, Country</li>
          </ul>
        </header>

        <hr />

        {/* Education Section */}
        <section>
          <h2 className="cv-section-title">Education</h2>
          <div className="cv-item">
            <h3>{data?.school || "School Name"}</h3>
            <p>
              {data?.degree || "Degree"} — {data?.year || "Year"}
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="cv-section-title">Experience</h2>
          <div className="cv-item">
            <h3>{data?.company || "Company Name"}</h3>
            <p>{data?.role || "Job Title"}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default PrintableInfo;
