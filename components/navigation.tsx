import { KeyboardKey } from "./keyboard-key";
import { useLocation } from "wouter";

export function Navigation() {
  const [, setLocation] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-pink-200/20">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-playfair font-black text-2xl text-pink-500">
            CTRL + HIM™
          </div>
          <KeyboardKey 
            size="sm" 
            onClick={() => setLocation("/")}
            className="text-sm"
          >
            ESC
          </KeyboardKey>
        </div>
      </div>
    </nav>
  );
}
