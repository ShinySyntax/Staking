import React from "react";
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import Staking from "./pages/Staking"
import { useAccount } from "wagmi";

function App() {
  const { address, isConnected } = useAccount();
  return (
    <div className="flex items-center flex-col">
      <Navbar />
      <div className="w-3/4">
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
