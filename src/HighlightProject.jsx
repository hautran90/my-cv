import ItemProject from "./ItemProject";
import theDeskPic from "./assets/theDeskPic.png";
import sourcePic from "./assets/sourcePic.png";
import rapidsPic from "./assets/rapidsPic.png";
import horizonPic from "./assets/horizonPic.png";
import knightRidePic from "./assets/knightRidePic.png";
import rhinePic from "./assets/rhinePic.png";

import fieldEge from "./assets/fieldEge.png";
import goldenSpoonPic from "./assets/goldenSpoonPic.png";
import vietcreditPic from "./assets/vietcreditPic.png";
import vcsalesPic from "./assets/vcsalesPic.png";
import fieldPic from "./assets/fieldPic.png";


function HighlightProjects() {
  return (
    <div>
      <ItemProject
        name="TheDesk App:"
        url="https://play.google.com/store/apps/details?id=com.officernd.thedesk"
        image={theDeskPic}
      />
       <ItemProject
        name="Source App:"
        url="https://play.google.com/store/apps/details?id=com.intelliriver.systems.src"
        image={sourcePic}
      />
       <ItemProject
        name="Rapids App:"
        url="https://play.google.com/store/apps/details?id=com.intelliriver.rapids"
        image={rapidsPic}
      />
       <ItemProject
        name="Horizons App:"
        url="https://play.google.com/store/apps/details?id=com.intelliriversystems.horizon"
        image={horizonPic}
      />
       <ItemProject
        name="Knight Ride App:"
        url=""
        image={knightRidePic}
      />
       <ItemProject
        name="Rhine App:"
        url="https://play.google.com/store/apps/details?id=com.rhinedigital.rhine"
        image={rhinePic}
      />
       <ItemProject
        name="FieldEdge App:"
        url="https://play.google.com/store/apps/details?id=com.fieldedge3&hl=en&gl=US "
        image={fieldEge}
      />
       <ItemProject
        name="The Golden Spoon:"
        url="https://play.google.com/store/apps/details?id=vn.com.ggg.gpeople"
        image={goldenSpoonPic}
      />
       <ItemProject
        name="VietCredit App:"
        url="https://play.google.com/store/apps/details?id=vn.vietcredit"
        image={vietcreditPic}
      />
       <ItemProject
        name="VcSales:"
        url="https://play.google.com/store/apps/details?id=com.vietcredit.techgel"
        image={vcsalesPic}
      />
      <ItemProject
        name="VcSales:"
        url="https://play.google.com/store/apps/details?id=com.vietcredit.techgel"
        image={fieldPic}
      />
      <ItemProject
        name="Field VC:"
        url="https://play.google.com/store/apps/details?id=vn.vietcredit.collection"
        image={vcsalesPic}
      />
    </div>
  );
}

export default HighlightProjects;
