import { Handle, HandleProps } from "reactflow";

const CustomHandle = ({
  type,
  position,
  isValidConnection,
  portSpec,
}: HandleProps & {
  key: string | number;
  portSpec: any;
  className?: string;
}) => (
  <>
    <Handle
      type={type}
      id={portSpec.id}
      position={position}
      isValidConnection={isValidConnection}
      className={
        "!relative !top-0 !left-0 !right-0 !translate-x-0 min-w-full !bg-black text-white text-[.4rem] p-1 dark:border-white dark:border"
      }
    >
      {portSpec.id}
    </Handle>
    <pre className="text-xs">{portSpec.type}</pre>
  </>
);

export default CustomHandle;
