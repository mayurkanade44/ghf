import mission from "../images/education.jpg";
import vision from "../images/vision.jpg";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="about-us">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-12">
              <h1 className="text-center mb-3">About Our Foundation</h1>
              <p>
                A registered trust working unbiasedly, focusing to deliver hope
                to all endeavors leading to improve sustainability and quality
                of life. To bring together technology, individuals, and teams
                who work within their circle of knowledge and excellence to
                collaborate with each other and to deliver hope in more than
                just monetary ways, through actions and means where it would
                matter and make the nation stronger, make INDIANS proud.
              </p>
              <p>
                Our programs are focused on individual and community revolving
                around health care, hygiene, skill development, empowering
                individuals, teaching /learning, relief works, innovations,
                technology distribution, education, water conservation, air
                purification, improved sanitation, animal welfare, and public
                health. Our focus is to bring together talented, experienced
                individuals from different walks of life to contribute and be a
                part of a greater good and impart lessons learnt over decades to
                empower and give hope.
              </p>
              <p>
                Our hope story, second-generation entrepreneur Mr. Stelson
                Quadros blessed with opportunities and self-empowered with HOPE,
                always was driven by a purpose to bring together individuals and
                teams wanting to give hope, touch lives, make the world a better
                place, and took upon himself to create a “foundation” a not for
                profit trust, where each purpose could be achieved with the same
                zeal and agility but in a way which was more open and inclusive
                having many more individuals and ideas achieved on a platform
                which could be sustainable and last over time. His sibling
                “Flavian” and mother “Stella Quadros” support his mission and
                have many contributions to enrich the building of this trust,
                all the while extending their network and experience, leading on
                many fronts in this journey of bringing hope to many.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="mission-vision">
        <div className="container">
          <div className="row mission">
            <div className="col-md-6 mv-det">
              <h1 className="text-center">Our Mission</h1>
              <p>
                <b>Education</b> is a fundamental human right, but
                unfortunately, not everyone has access to quality education.
                This is especially true for students in underprivileged
                communities who lack the resources necessary to receive a proper
                education. Student education charities aim to bridge this gap by
                providing students with the necessary support to achieve their
                academic potential. <br />
                One of the most significant benefits of student education
                charities is that they can provide access to resources that many
                students may not have otherwise., These charities often provide
                students with mentorship and guidance, which can be invaluable
                in helping them navigate the challenges of academic life.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <img src={mission} alt="mission" />
            </div>
          </div>
          <div className="row vision flex-column-reverse flex-md-row">
            <div className="col-md-6 d-flex align-items-center">
              <img src={vision} alt="vision" />
            </div>
            <div className="col-md-6 mv-det">
              <h1 className="text-center">Our Vision</h1>
              <p>
                Ut ultricies lacus a rutrum mollis. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl
                ligula, ullamcorper non metus vitae, maximus efficitur mi.
                Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui.
                Proin massa urna, volutpat vel augue eget, iaculis tristique
                dui.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
