export const LoadingBar = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="text-center text-white">Carregando...</div>
      <div className="animate-pulse bg-purple-200 h-4 w-full max-w-md rounded-full"></div>
    </div>
  );
};
