import React from "react";
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import Staking from "./pages/Staking"
import { useAccount } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  return (
    <div className="flex items-center flex-col bg-white dark:bg-[#111629] text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      <Navbar />
      <div className="w-full px-4 sm:w-3/4">
        {isConnected ? (
          <Staking />
        ) : (
          <Landing />
        )}

      </div>
    </div>
  );
}

export default App;
