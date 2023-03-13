import Link from "next/link";
import Image from "next/image";
import { ModelProps, models } from "./Model";

interface ModelListProps {
  models: ModelProps[];
}

const ModelList: React.FC<ModelListProps> = ({ models }) => (
  <>
    <h3 className="mb-2 text-lg font-bold md:mb-4 md:text-xl md:font-bold">
      Models
    </h3>

    <div className="grid w-full grid-cols-3 gap-2 bg-white md:gap-4">
      {models.map((model) => (
        <Link
          href={`${model.slug}`}
          key={model.id}
          className="flex flex-col items-center justify-center h-full gap-2 p-2 cursor-pointer md:p-4 md:justify-start md:items-start md:border md:bg-white md:border-dark-90 md:hover:bg-dark-99 rounded-xl"
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-95">
            <Image src={model.icon} alt={model.name} width={24} height={24} />
          </div>
          <div className="h-6 md:h-auto">
            <h1 className="text-xs font-semibold leading-3 md:text-base md:text-left">
              {model.name}
            </h1>
            <p className="invisible font-serif text-sm text-dark-40 md:text-left md:visible">
              {model.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default ModelList;
