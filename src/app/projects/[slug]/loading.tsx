import { AnimatedLogo } from "@/components/AnimatedLogo";

export default function Loading() {
  return (
    <div className="mt-16 mb-8 flex flex-col items-center justify-center space-y-4">
      <AnimatedLogo />
      <p className="text-center">Loading...</p>
    </div>
  );
}
