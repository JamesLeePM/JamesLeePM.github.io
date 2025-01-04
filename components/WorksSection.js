import React, { useState } from "react";
import Work from "./Work";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const projectsData = [
  {
    id: "2342",
    name: "Great Love Mission Church",
    technologies: [
      "NodeJs", "Wordpress", "MongoDB", "React", "Next Js", "MySQL", "AWS servers, etc"],
    image: "./img/projects/glmc.png",
    link: "https://www.greatlovemission.org",
    linkSource: "https://greatlovemission.org/%EC%84%A4%EA%B5%90-%EB%AA%A8%EC%9D%8C/",
    description: `Great Love Mission Church is a local Presbyterian Church associated with PCA
    (Presbyterian Church in America). The church has a mission of serving the community and
    spreading the gospel of Jesus Christ.`,
    private: true,
  },
  {
    id: "2233",
    name: "USPS Health Connect",
    technologies: ["PHP", "Swift", "Kotlin/Java", "NodeJs", "Express", "MongoDB", "Angular Js", "AWS servers", "Azure servers"],
    image: "./img/projects/uhc1.png",
    link: "https://apkpure.com/usps-health-connect-phr/com.usps.health",
    linkSource: "https://www.healthitanswers.net/usps-health-connect-digital-application-securing-health-information-patients/",
    description: `The United States Postal Service (USPS) Health Connect is a patient-centric portal for USPS employees. 
    Health Connect uses an open architecture and is designed to provide flexibility and interoperability with various technologies.`,
    private: true,
  },
  {
    id: "22",
    name: "USPS Health Connect - Electronic Postmark",
    technologies: ["Python", "API", "WSDL", "JAVA", "XML", "Hashing", "Encryption", "AWS servers", "Azure servers"],
    image: "./img/projects/uhc-epm.png",
    link: "https://patents.google.com/patent/WO2016149047A1/en",
    linkSource: "https://patents.google.com/patent/US20230129463A1/en",
    description: `The product consists of electronic postmark receiving a request message from an electronic network, creating a timestamp, 
    hashing the payload data, and digitally signing the metadata, payload hash, and timestamp to produce a digital signature. A response 
    message is then generated, which includes the metadata, payload hash, timestamp, and digital signature, and is transmitted back onto the electronic network.`,
    private: true,
  },
  {
    id: "1",
    name: "Bible Verse App",
    technologies: ["Python", "Flask", "CSS", "HTML"],
    image: "./img/projects/bibleverseapp.png",
    link: "https://youtu.be/FQdmBKtsQcY",
    linkSource:
      "https://github.com/jamesakanoa/bibleverseapp",
    description: `This application allows users to look up Bible verses and provides links to external resources like Bible Gateway 
    and The Bible Says. It is designed to be user-friendly, offering real-time suggestions and a responsive design.`,
    private: true,
  }
];

function WorksSection() {
  const [showLess, setShowLess] = useState(true);

  let filteredData = projectsData;
  if (showLess) {
    filteredData = filteredData.slice(0, 6);
  }
  return (
    <section className="section-works" id="portfolio">
      <div className="works-header row">
        <h2 className="section-title">My recent works</h2>
        <hr className="text-divider" />
      </div>

      <div className="works-container row">
        {filteredData.map((project) => (
          <Work key={project.id} data={project} />
        ))}
      </div>
      <div className="works-load-more row">
        <button onClick={() => setShowLess((prev) => !prev)} className="btn">
          {showLess ? (
            <AiOutlinePlus className="icon" />
          ) : (
            <AiOutlineMinus className="icon" />
          )}
          {showLess ? "Load more projects" : "Load less projects"}
        </button>
      </div>
    </section>
  );
}

export default WorksSection;