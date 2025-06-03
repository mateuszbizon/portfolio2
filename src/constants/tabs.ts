import LanguageSkills from "@/components/skills/LanguageSkills";
import { Tab } from "@/components/ui/tabs";

export const SKILL_TABS: Tab[] = [
    {
       title: "Languages",
       value: "languages",
       content: LanguageSkills() 
    },
    {
       title: "Frameworks",
       value: "frameworks",
       content: LanguageSkills() 
    },
]