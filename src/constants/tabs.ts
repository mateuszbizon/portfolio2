import Databases from "@/components/skills/Databases";
import Frameworks from "@/components/skills/Frameworks";
import Libraries from "@/components/skills/Libraries";
import OtherSkills from "@/components/skills/OtherSkills";
import ProgrammingLanguages from "@/components/skills/ProgrammingLanguages";
import { Tab } from "@/components/ui/tabs";

export const SKILL_TABS: Tab[] = [
    {
       title: "Languages",
       value: "languages",
       content: ProgrammingLanguages() 
    },
    {
       title: "Frameworks",
       value: "frameworks",
       content: Frameworks() 
    },
    {
       title: "Databases",
       value: "databases",
       content: Databases() 
    },
    {
       title: "Libraries",
       value: "libraries",
       content: Libraries() 
    },
    {
       title: "Other skills",
       value: "other-skills",
       content: OtherSkills() 
    },
]