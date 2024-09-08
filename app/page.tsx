import Image from "next/image";
import MotionSection from "./components/MotionSection";
import ParallexScroll from "./components/ParallexScroll";
import CardInfo from "./components/CardInfo";
import { SiAzuredataexplorer, SiGoogleanalytics, SiMicrosoftteams, SiHive } from "react-icons/si";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ContainerMotion from "./components/ContainerMotion";
import TypeAnimation from "./components/TypeAnimation";

export default function Home() {
  return (
    <main className=" h-full">
      <ParallexScroll />
      <MaxWidthWrapper className=" overflow-hidden z-30 relative ">
        <ContainerMotion className=" flex   justify-center items-stretch gap-10">
          <CardInfo
            title="EXPLORE"
            desc="Explore over 200 courses"
            Icon={SiAzuredataexplorer}
            iconColor="text-violet-600"
            hoverBg="bg-indigo-400 hover:shadow-indigo-600"
          />
          <CardInfo
            title="ANALYZE"
            desc="Analyze your progress"
            Icon={SiGoogleanalytics}
            iconColor="text-blue-600"
            hoverBg="bg-teal-500 hover:shadow-teal-700"
          />
          <CardInfo
            title="COLLABORATE"
            desc="Collaborate with others"
            Icon={SiMicrosoftteams}
            iconColor="text-green-600"
            hoverBg="bg-orange-400 hover:shadow-orange-700"
          />
          <CardInfo
            title="INNOVATE"
            desc="Create and innovate"
            Icon={SiHive}
            iconColor="text-yellow-500"
            hoverBg="bg-pink-500 hover:shadow-pink-700"
          />
        </ContainerMotion>
      </MaxWidthWrapper>

      {/* <TypeAnimation/> */}
    </main>
  );
}
