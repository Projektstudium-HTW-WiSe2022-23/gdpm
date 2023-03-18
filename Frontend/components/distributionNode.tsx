import { FC } from "react";
import { Connection, Handle, NodeProps, Position, Node } from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore, selector } from "../hooks/store";
import { validate, findPreviousNode } from "../internal/validate";
import { portSpec } from "../types/portSpec";
import CustomHandle from "./customHandle";

type props = {
  data: any;
};

type NodeData = {
  distribution: string;
};

const distributionNode: FC<NodeProps<NodeData>> = ({
  data,
  dragging,
  selected,
}: props) => {
  const { nodes, edges } = useStore(selector, shallow);
  const isValid = (connection: Connection): boolean => {
    const sourceOutput = data.dist.output;
    const targetNode: Node = nodes.find(
      (node: Node) => node.id == connection.target
    );
    const targetInput: portSpec = targetNode.data.dist.inputs.find(
      (input: any) => input.name == connection.targetHandle
    );

    const sourceNode: Node = nodes.find(
      (node: Node) => node.id == connection.source
    );

    //console.log(
    //  "find prev node: ",
    ////musse von aktueller node ausgehen, nicht von target
    //  findPreviousNode(sourceOutput, targetInput.name, edges, nodes)
    //);

    const v = validate(sourceNode, sourceOutput, targetInput);

    console.log("validating", sourceOutput, targetNode, targetInput, v);
    return v;
  };

  return (
    <div className="flex border border-blue-600 dark:border-blue-900 bg-blue-200 dark:bg-blue-800 px-8 py-4">
      {selected && (
        <div className="absolute -top-10 flex gap-2 rounded bg-gray-50 border border-gray-100">
          <button className="p-1">edit</button>
          <button className="p-1">delete</button>
        </div>
      )}
      {data.dist.inputs && (
        <div className="flex flex-col justify-around h-full">
          {data.dist.inputs?.map((input: any, index: number) => (
            <CustomHandle
              type="target"
              key={index}
              id={input.name}
              name={input.name}
              position={Position.Left}
            ></CustomHandle>
          ))}
        </div>
      )}

      <div onClick={console.log("bang")}>
        <p className="font-bold text-md">{data.dist.name}</p>
      </div>

      {data.dist.output && (
        <div className="absolute top-0 right-0 translate-x-1/2 flex flex-col justify-around h-full">
          <CustomHandle
            type="source"
            key="support"
            id={data.dist.output.name}
            name={data.dist.output.name}
            position={Position.Right}
            isValidConnection={isValid}
            className={"w-full h-full"}
          ></CustomHandle>
        </div>
      )}
    </div>
  );
};

export default distributionNode;