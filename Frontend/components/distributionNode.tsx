import { memo, useState } from "react";
import { Position, Node, Connection, useEdges, useNodes } from "reactflow";
import { validate } from "../internal/validate";
import { portSpec } from "../types/portSpec";
import CustomHandle from "./customHandle";
import Link from "next/link";

const DistributionNode = memo(({ data, selected }: any) => {
  const [showModal, setShowModal] = useState(false);
  const nodes = useNodes();
  const isValid = (connection: Connection): boolean => {
    const sourceOutput = data.dist.output;
    const targetNode: any = nodes.find(
      (node: Node) => node.id == connection.target
    );
    const targetInput: portSpec = targetNode.data.dist.input.find(
      (input: any) => input.id == connection.targetHandle
    );

    const sourceNode: any = nodes.find(
      (node: Node) => node.id == connection.source
    );

    const v = validate(sourceNode, sourceOutput, targetInput);

    console.log("validating", sourceOutput, targetNode, targetInput, v);
    return v;
  };

  return (
    <div className="flex">
      {selected && (
        <div className="absolute -top-10 flex gap-2 rounded bg-gray-50 border border-gray-100">
          <button className="p-1">edit</button>
          <button className="p-1">delete</button>
          <button className="p-1">info</button>
          <button onClick={() => {setShowModal(true)}}>modal</button>
         {showModal && ( <div className="overflow-auto p-1 absolute top-24 w-64 h-96 border border-blue-600 bg-blue-200" onClick={() =>setShowModal(false)}>
            <div className="pb-2 overflow-auto">{data.dist.distType}</div>
            <div className="overflow-auto p-1"><Link href={data.dist.url} target="_blank">{data.dist.url}</Link></div>
            <ul>
                    {data.dist.input.map((input, index) => (
                  <div><li className="p-1" key={index}><p>id:</p> {input.id}</li>
                      <li className="p-1" key={index}><p>name:</p> {input.name}</li>
                      <li className="p-1" key={index}><p>type:</p> {input.type}</li>
                      <li className="p-1" key={index}><p>upper:</p> {input.upper}</li>
                      <li className="p-1" key={index}><p>lower:</p> {input.lower}</li>
                      <hr className="border-b border-blue-600 my-4" ></hr>
                      </div>
                    ))}
                  </ul>


         </div>)}
        </div>
      )}
      {data.dist.input && (
        <div className="flex flex-col justify-center gap-1 py-1">
          {data.dist.input?.map((input: any, index: number) => (
            <CustomHandle
              type="target"
              key={index}
              id={input.id}
              name={input.id}
              position={Position.Left}
            ></CustomHandle>
          ))}
        </div>
      )}

      <div className="bg-blue-200 border border-blue-600 p-1 flex items-center justify-center">
        <p className="font-bold text-md">{data.dist.name}</p>
      </div>

      {data.dist.output && (
        <div className="flex flex-col justify-center py-1">
          <CustomHandle
            type="source"
            key="support"
            id={data.dist.output.id}
            name={data.dist.output.id}
            position={Position.Right}
            isValidConnection={isValid}
            isConnectable={false}
            className={"w-full h-full"}
          ></CustomHandle>
        </div>
      )}
    </div>
  );
});

DistributionNode.displayName = "DistributionNode";
export default DistributionNode;
