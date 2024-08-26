import { ConnectButton } from "@rainbow-me/rainbowkit";


function Navbar (){
    return(
        <div className="flex w-full justify-end p-3">
            <ConnectButton />
        </div>
    )
}

export default Navbar;