import { cn } from "@/lib/utils";
import ChildMotion from "./ChildMotion";

const CardInfo = ({
  Icon,
  title,
  desc,
  iconColor,
  hoverBg,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  iconColor?: string;
  hoverBg?: string;
}) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <ChildMotion hover
      item={item}
      className={cn(
        "py-6 px-8 shadow-md cursor-pointer  bg-white flex flex-col sm:flex-row duration-150",
        "items-start gap-4 hover:-translate-y-2 shadow-lg text-gray-50",
        hoverBg,
      )}
    >
      <Icon className={cn("w-10 h-10", iconColor)} style={{ filter: "drop-shadow(0 0 10px currentColor)" }} />
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-base">{desc}</p>
      </div>
    </ChildMotion>
  );
};
export default CardInfo;
