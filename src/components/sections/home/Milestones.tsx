import Milestones from "../../common/Milestones";
import { defaultMilestones } from "../../../data/milestones";

const HomeMilestones = () => {
    return (
        <Milestones
            items={defaultMilestones}
            eyebrow="Milestones"
            title="Why Choose Us ?"
        />
    );
};

export default HomeMilestones;
