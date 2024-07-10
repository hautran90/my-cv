import Avatar from "./Avatar";
import CustomContainer from "./CustomButton";
import Education from "./Education";

function Introduce() {
  return (
    <div className="introduce">
      <div className="header-row">
        <Avatar />
        <div>
          <h1>Phuc Tran Huy</h1>
          <h2>Developer / Technical Lead</h2>
          <hr className="header-divider" />
          <h3>
            Email:{" "}
            <a className="email-link" href="mailto:tranhuyphuc.tn@gmail.com">
              tranhuyphuc.tn@gmail.com
            </a>
          </h3>
          <h3>
            LinkedIn:{" "}
            <a
              className="email-link"
              href="https://www.linkedin.com/in/phuc-tran-51a542190/"
            >
              https://www.linkedin.com/in/phuc-tran
            </a>
          </h3>
          <h3>Phone: +84 907445339</h3>
          <h3>
            Address: 38 Cay Keo, Tam Phu Ward, Thu Duc, HCM City, Vietnam.
          </h3>
        </div>
      </div>
      <h4>
        I have been working in mobile development for 6 years, with over 5 years
        of experience in Flutter. I have experience in outsourcing, finance...
        Currently starting to learn about web programming with Reactjs. I have
        the ability to work independently and teamwork. I am always willing to
        learn and improve my technical skills to contribute better code to
        projects. I want to be a member of a professional team that produces
        high-quality products.
      </h4>
      <p className="underlined-text">EXPERTISE</p>
      <div className="header-row">
        <CustomContainer name="Mobile App" />
        <CustomContainer name="Project Architecture (MVP, MVVM, Bloc, MobX…)" />
        <CustomContainer name="Technical Lead" />
        <CustomContainer name="Android – iOS" />
        <CustomContainer name="Flutter " />
        <CustomContainer name="Firebase" />
        <CustomContainer name="REST/GraphQL" />
        <CustomContainer name="Training" />
        <CustomContainer name="WebSocket" />
        <CustomContainer name="Third Party" />
        <CustomContainer name="Map" />
        <CustomContainer name="Dart" />
        <CustomContainer name="Reactjs" />
        <CustomContainer name="Redux" />
        <CustomContainer name="Git" />
        <CustomContainer name="Jira" />
        <CustomContainer name="Fastlane" />
        <CustomContainer name="Finance" />
      </div>
      <p className="underlined-text">EDUCATION</p>
      <div className="education-row">
        <Education
          major="Bachelor of Science in Information Technology"
          school="University of Science, HCMC, Vietnam"
          year="2008 – 2011"
          degree="Degree classification: Good"
        />
        <Education
          major="Bachelor of Science in Information Technology"
          school="HCM University of  Technology and Education "
          year="2019 – 2021"
          degree="Degree classification: Very Good"
        />
      </div>
    </div>
  );
}

export default Introduce;
