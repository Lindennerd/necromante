import necromante from "../../assets/necromante.png";

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <img src={necromante} alt="Logo Necromante" className="w-20 rounded" />
      <p className="mt-2 font-bold text-white">Necromante Rabbit MQ</p>
    </div>
  );
};
