import { KeyboardKey } from "./keyboard-key";
import { useLocation } from "wouter";

export function MobileCTA() {
  const [, setLocation] = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 p-4 bg-white/95 backdrop-blur-sm border-t border-pink-200/20">
      <KeyboardKey 
        size="lg"
        onClick={() => setLocation("/search")}
        className="w-full py-4 text-lg"
      >
        <div className="text-center">
          <div>✨ PRESS TO UNLOCK VAULT ✨</div>
          <div className="text-sm opacity-90 mt-1">SPACEBAR</div>
        </div>
      </KeyboardKey>
    </div>
  );
}
