import { ArrowPathIcon, CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { CloudIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky-universal";
import router from "next/router";
import { useCallback, useState } from "react";

export default function SaveButton({ reactFlowInstance, modelname }: any) {
  const [defaultButton, setDefaultButton] = useState(true);
  const [isFirstSave, setIsFirstSave] = useState(false);

  const queryClient = useQueryClient();
  const updateModelMutation = useMutation({
    mutationFn: (payload: any) => {
      if (!payload.id) {
        setIsFirstSave(true);
        return ky
          .post(`${process.env.NEXT_PUBLIC_API_URL}/models/`, {
            json: payload,
          })
          .json();
      }

      setIsFirstSave(false);
      return ky
        .put(`${process.env.NEXT_PUBLIC_API_URL}/models/${modelname}/`, {
          json: payload.body,
        })
        .json();
    },
    onMutate: () => {
      setDefaultButton(false);
    },
    onSuccess: (response: any) => {
      setTimeout(() => {
        setDefaultButton(true);
      }, 1000);
      router.push(`/model/${response.id}`);
    },
  });
  const handleSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      console.log("saving", flow);
      updateModelMutation.mutate({
        title: modelname,
        body: flow,
      });
    }
  }, [modelname, reactFlowInstance]);

  return (
    <button className="p-1 hover:bg-gray-200 rounded" onClick={handleSave}>
      {defaultButton ? (
        <CloudArrowDownIcon className="w-5" />
      ) : (
        <>
          {updateModelMutation.isLoading && <ArrowPathIcon className="w-5" />}
          {updateModelMutation.isError && (
            <ExclamationTriangleIcon className="w-5 text-red-500" />
          )}
          {updateModelMutation.isSuccess && (
            <CloudIcon className="w-5 text-green-500" />
          )}
        </>
      )}
    </button>
  );
}