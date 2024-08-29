import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import { Button, Input, message, Select } from "antd";



function Staking() {
    const [amount, setAmount] = useState("");
    const [step, setStep] = useState("amount");
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const MIN_WBTC_AMOUNT = 1;
    const MIN_WETH_AMOUNT = 2;
    const MIN_USDT_AMOUNT = 3;

    const handleNext = () => {
        console.log(step)
        if (step === 'amount') {
            if(address === "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"){
                if(parseFloat(amount) < MIN_WBTC_AMOUNT){
                    setError(`The minimumMINIMUM WBTC staking amount is ${MIN_WBTC_AMOUNT} tokens.`);
                    message.error(`The minimum WBTC staking amount is ${MIN_WBTC_AMOUNT} tokens.`);
                    return;
                }
                setError("");
                setStep('review');
            }
            else if(address === "0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1"){
                if(parseFloat(amount) < MIN_WETH_AMOUNT){
                    setError(`The minimum WETH staking amount is ${MIN_WETH_AMOUNT} tokens.`);
                    message.error(`The minimum WBTC staking amount is ${MIN_WETH_AMOUNT} tokens.`);
                    return;
                }
                setError("");
                setStep('review');
            }
            else if(address === "0xdac17f958d2ee523a2206206994597c13d831ec7"){
                if(parseFloat(amount) < MIN_USDT_AMOUNT){
                    setError(`The minimum USDT staking amount is ${MIN_USDT_AMOUNT} tokens.`);
                    message.error(`The minimum WBTC staking amount is ${MIN_USDT_AMOUNT} tokens.`);
                    return;
                }
                setError("");
                setStep('review');
            }
            
        }
    };

    const handleBack = () => {
        if (step === 'review') {
            setStep('amount');
        }
    };

    const handleSubmit = () => {
        console.log(amount, address);
    }

    return (
        <div className="mt-24 flex flex-wrap items-center pt-24 justify-between">
            <div className="w-full lg:w-1/2  ">
                <h1 className="pb-8 text-2xl">Manage</h1 >
                <div className="border bg-[#3b82f6] text-black rounded-3xl p-3 w-full">
                    <div className="bg-white p-5 rounded-2xl w-full">
                        {

                        }
                        <h2 className="text-xl font-semibold mb-4">Stake Your Tokens</h2>

                        {/* Tabs for navigation */}
                        <div className="flex space-x-4 mb-5">
                            <button className={`flex-1 py-2 border-b-2 ${(step === 'amount') ? 'border-blue-500' : 'border-white'} `}>Amount</button>
                            <button className={`flex-1 py-2 border-b-2 ${(step === 'review') ? 'border-blue-500' : 'border-white'}`}>Review</button>
                        </div>

                        {/* Content based on step */}
                        {step === 'amount' && (
                            <div>
                                <p className="mb-4 text-2xl ">How much would you like to stake?</p>
                                <p className="text-sm mb-4">
                                    WhaleStrategy's staking platform is fully audited by CertiK and our staking contracts are
                                    monitored 24/7 on Skynet. Know the risks of staking and choose an amount that fits your plan.
                                </p>
                                <div className=" flex">
                                    <Input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full p-2 border rounded focus:outline-none"
                                    />
                                    <Select
                                        defaultValue="Select Token"
                                        onChange={(value) => setAddress(value)}
                                        className="h-12 w-32 ml-2"
                                        options={[
                                            {
                                                value: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
                                                label: 'WBTC',
                                            },
                                            {
                                                value: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
                                                label: 'WETH',
                                            },
                                            {
                                                value: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                                                label: 'USDT',
                                            },
                                        ]}
                                    />

                                </div>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Display error message */}
                            </div>
                        )}



                        {step === 'review' && (
                            <div>
                                Are you sure you want to stake?
                            </div>
                        )}

                        <div className="flex flex-wrap mt-4">
                            {step !== 'amount' && <Button onClick={handleBack} className="py-2 px-4 w-full h-11 mb-4 border rounded">Back</Button>}
                            {step === 'amount' && (
                                <Button onClick={handleNext} className="py-2 px-4 w-full h-11 bg-blue-500 text-white rounded">
                                    Next
                                </Button>
                            )}

                            {step === 'review' && (
                                <Button onClick={handleSubmit} className="py-2 px-4 w-full h-11 bg-blue-500 text-white rounded">
                                    Stake
                                </Button>
                            )}

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full mt-8 lg:w-2/5 lg:mt-0">
                <h1 className="pb-8 text-2xl">Supply & Borrow Info</h1 >
                <div className="border rounded-2xl p-5 w-full">

                </div>

            </div>
        </div>
    )
}

export default Staking;