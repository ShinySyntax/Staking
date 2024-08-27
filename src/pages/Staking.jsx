import { useState, useEffect } from "react";
import { ethers } from 'ethers';

function DurationSelector({ onDurationSelect, selectedDuration }) {
    const durations = [
        { id: 1, label: "1 Month", value: 30 },
        { id: 2, label: "3 Months", value: 90 },
        { id: 3, label: "6 Months", value: 180 },
        { id: 4, label: "1 Year", value: 365 }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {durations.map(duration => (
                <button
                    key={duration.id}
                    className={`p-4 border-2 rounded-lg ${selectedDuration === duration.value ? 'border-blue-500' : 'border-gray-300'} hover:border-blue-500`}
                    onClick={() => onDurationSelect(duration.value)}
                >
                    {duration.label}
                </button>
            ))}
        </div>
    );
}

function Staking() {
    const [amount, setAmount] = useState("");
    const [duration, setDuration] = useState(null);
    const [step, setStep] = useState("amount");
    const [address, setAddress] = useState("");


    const handleNext = () => {
        console.log(step)
        if (step === 'amount') {
            setStep('duration');
        } else if (step === 'duration') {
            setStep('review');
        }
    };

    const handleBack = () => {
        if (step === 'duration') {
            setStep('amount');
        } else if (step === 'review') {
            setStep('duration');
        }
    };

    const handleSubmit = () => {
        console.log(amount, duration, address);
    }

    return (
        <div className="mt-24 flex flex-wrap items-center pt-24 justify-between">
            <div className="w-full lg:w-1/2  ">
                <h1 className="pb-8 text-2xl">Manage</h1 >
                <div className="border bg-[#7757d1] text-black rounded-3xl p-3 w-full">
                    <div className="bg-white p-5 rounded-lg w-full">
                        {

                        }
                        <h2 className="text-xl font-semibold mb-4">Stake Your Tokens</h2>

                        {/* Tabs for navigation */}
                        <div className="flex space-x-4 mb-5">
                            <button className={`flex-1 py-2 border-b-2 ${(step === 'amount') ? 'border-blue-500' : 'border-white'} `}>Amount</button>
                            <button className={`flex-1 py-2 border-b-2 ${(step === 'duration') ? 'border-blue-500' : 'border-white'}`}>Duration</button>
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
                                <div className="p-2 flex">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full p-2 border rounded focus:outline-none"
                                    />
                                    <select name="" id="" onChange={(e) => setAddress(e.target.value)}>
                                        <option value="">Select Token</option>
                                        <option value="0x2260fac5e5542a773aa44fbcfedf7c193bc2c599">WBTC</option>
                                        <option value="0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1">WETH</option>
                                        <option value="0xdac17f958d2ee523a2206206994597c13d831ec7">USDT</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {step === 'duration' && (
                            <DurationSelector
                                onDurationSelect={setDuration}
                                selectedDuration={duration}
                            />
                        )}

                        {step === 'review' && (
                            <div>
                                Are you sure you want to stake?
                            </div>
                        )}

                        <div className="flex justify-between mt-4">
                            {step !== 'amount' && <button onClick={handleBack} className="py-2 px-4 border rounded">Back</button>}
                            {step === 'amount' && (
                                <button onClick={handleNext} className="py-2 px-4 bg-blue-500 text-white rounded">
                                    Next
                                </button>
                            )}
                            {step === 'duration' && (
                                <button onClick={handleNext} className="py-2 px-4 bg-blue-500 text-white rounded">
                                    Next
                                </button>
                            )}
                            {step === 'review' && (
                                <button onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded">
                                    Stake
                                </button>
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