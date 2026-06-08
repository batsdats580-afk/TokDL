export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-1.5 h-4 bg-[#ff0050] animate-bounce rounded"></div>
      <div className="w-1.5 h-4 bg-[#00f2ea] animate-bounce rounded delay-150"></div>
      <div className="w-1.5 h-4 bg-white animate-bounce rounded delay-300"></div>
    </div>
  );
}
