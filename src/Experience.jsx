import CustomItemExperience from "./CustomItemExperience";

function Experience() {
  const waeContains = [
    "Build layout with Android.",
    "Basic engineering research in android.",
  ];

  const meggittContains = [
    "Safety.",
    "Fire protection.",
    "Office regulations."
  ];

  const nextfuncContains = [
    "Build UI : Container, ListView, Animation, Haptic, Chart, Image, ListView, Canvas.",
    "State management: Mobx, provider, Scope model, Bloc.",
    "Biometric.",
    "Firebase: Crashlytics, Dynamic link, Notification, Cloud Function, Authentication, Firebase Storage.",
    "SQLite, Shared preferences.",
    "Json.",
    "Http.",
    "Using external dependencies: Dio, SQLite, spinkit, permission_handler, Scan QR, GPS, Map.",
    "App stores: Google Play, AppStore.(use Fastlane)."
  ];

  const carpTechContains = [
    "Lead mobile team (<5 mobile developers) to build mobile in the restaurant sector (reservation, points, voucher).",
    "Train and support developers.",
    "Code the new feature.",
    "Report to project managers.",
    "Review developers’ code. Refactor code.",
    "Coordinate and have meetings with both clients and project managers to analyze requirements and create business plans.",
    "Consult the team to apply modern architectures and patterns (MVP, MVVM, Architecture Component…).",
    "R & D (new and trending technologies: Firebase, Flutter…).",
    "Assign and manage tasks through Git issues and Jira.",
    "Apply Agile methodology (Scrum): daily communication, weekly meeting, sprints…",
    "Release apps to stores (Google Play and Apple Store).",
    "Tools: Android Studio, Xcode, IntelliJ Idea, Source Tree, Github. "
  ];

  const vietCreditContains = [
    "Lead mobile team (<10 mobile developers) to build mobile in finance.",
    "Train and support developers.",
    "Code the new feature.",
    "Report to project managers.",
    "Review developers’ code. Refactor code.",
    "Publish the app to Google Play and App Store.",
    "Integrated SDK for the app: TrueID, Adjust, Credolab, read citizen identification card"
  ];

  const bumbiiContains = [
    "Develop mobile applications using the Flutter Framework",
    "Develop web applications using the Nextjs, Axios, Zustand",
    "Develop new applications as well as maintain Bumbii 's outsourced projects.",

  ];

  return (
    <div>
      <CustomItemExperience
        title="Android Developer"
        company="WAE (Japan)"
        time="11/2013 – 02/2014"
        contains={waeContains}
      />
      <CustomItemExperience
        title="Android Developer"
        company="Digimate - Vietnamese Startup"
        time="03/2014 – 08/2014"
        contains={waeContains}
      />
      <CustomItemExperience
        title="Supervisor Product"
        company="Meggitt Vietnamese"
        time="09/2014 – 08/2018"
        contains={meggittContains}
      />
      <CustomItemExperience
        title="Flutter Developer"
        company="Nextfunc"
        time="09/2018 – 11/2021"
        contains={nextfuncContains}
      />
       <CustomItemExperience
        title="Technical Lead"
        company="Carp Tech Corporation"
        time="11/2021 – 03/2022"
        contains={carpTechContains}
      />
       <CustomItemExperience
        title="Mobile Expert (Flutter team)"
        company="VietCredit Finance Company"
        time="04/2022 – 04/2024"
        contains={vietCreditContains}
      />
      <CustomItemExperience
        title="Senior Developer"
        company="Bumbii Technology"
        time="04/2024 – Present"
        contains={bumbiiContains}
      />
    </div>
  );
}

export default Experience;
