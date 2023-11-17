import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Message } from "../../../types";
import { usePublish } from "../../hooks/usePublish";
import { currentQueueStore } from "../../store/necromante.store";
import { QueueInput } from "../QueueInput";
import { Modal } from "../base/Modal";

export const RessucitateButton = ({ message }: { message: Message }) => {
  const [currentQueue] = useAtom(currentQueueStore);
  const [ressusitateQueue, setRessusitateQueue] = useState<
    "Ressucitar" | "Ressucitado!"
  >("Ressucitar");
  const [isOpened, setIsOpened] = useState(false);
  const [targetQueue, setTargetQueue] = useState(currentQueue);
  const { publish } = usePublish();

  useEffect(() => {
    setTimeout(() => setRessusitateQueue("Ressucitar"), 2000);
  }, [ressusitateQueue]);

  function handleRessusitate(): void {
    if (!targetQueue) return;
    publish(targetQueue, message.content);
    setRessusitateQueue("Ressucitado!");
  }

  return (
    <>
      <div className="flex justify-end w-full">
        <button
          className="bg-purple-300 rounded hover:bg-purple-400 px-2"
          onClick={(e) => setIsOpened(true)}
        >
          Ressucitar
        </button>
      </div>

      <Modal
        title="Ressucitar Mensagem"
        onClose={() => setIsOpened(!isOpened)}
        isOpen={isOpened}
      >
        <div className="flex justify-between gap-2">
          <div>
            <label>Escolha a fila de destino</label>
            <QueueInput queue={targetQueue ?? ""} setQueue={setTargetQueue} />
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="bg-purple-300 rounded hover:bg-purple-400 px-2"
              onClick={(e) => handleRessusitate()}
            >
              {ressusitateQueue}
            </button>
            <button
              className="bg-purple-300 rounded hover:bg-purple-400 px-2"
              onClick={(e) => setIsOpened(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
