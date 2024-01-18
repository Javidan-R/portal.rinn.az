import React, { useState } from "react";
import BackButton from "../atoms/Button/BackButton";

interface StepItemProps {
    index: number;
    activeStep: number;
    onClick: () => void;
}

const StepItem: React.FC<StepItemProps> = ({ index, activeStep, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div
                className={`flex-grow ${isHovered || index === activeStep ? "opacity-100" : "opacity-0"
                    } text-sm md:text-base`}
            >
                {index === 0 && "Bildirişlə tanış olun"}
                {index === 1 && "Cihaz tipini seçin və IMEI nömrəsini daxil edin"}
                {index === 2 && "Şəxsi məlumatları daxil et"}
                {index === 3 && "Məlumatı yoxlayın"}
            </div>
            <div
                className={`cursor-pointer w-8 h-8 mr-2 flex items-center justify-center rounded-full  text-white ${index === activeStep
                    ? "bg-blue-600 text-white  "
                    : "bg-gray-300  hover:bg-gray-400"
                    } transition-colors duration-300 ease-in-out p-4 rounded`}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {index + 1}
            </div>

        </div>
    );
};

interface StepsProps { }

const Steps: React.FC<StepsProps> = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

    const handleNextStep = () => {
        setActiveStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    };

    const handlePreviousStep = () => {
        setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="card p-6">
                <div className="steps-card">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-lg md:text-xl">
                            {activeStep === 0 && "Bildirişlə tanış olun"}
                            {activeStep === 1 && "Cihaz tipini seçin və IMEI nömrəsini daxil edin"}
                            {activeStep === 2 && "Şəxsi məlumatları daxil et"}
                            {activeStep === 3 && "Məlumatı yoxlayın"}
                        </span>

                    </div>
                    <div className="progressbar hidden md:flex justify-between mb-4">
                        {Array.from({ length: 4 }, (_, index) => (
                            <StepItem
                                key={index}
                                index={index}
                                activeStep={activeStep}
                                onClick={() => setActiveStep(index)}
                            />
                        ))}
                    </div>
                    <div className="progressbar-mobile mb-4">
                        <div
                            className={`progressbar-mobile__wrapper h-2 bg-blue-600 rounded-full transition-width duration-300 ease-in-out`}
                            style={{ width: `${(activeStep + 1) * 25}%` }}>
                        </div>
                    </div>

                    <form className="form">
                        <section>
                            <div className="steps-card__text text-lg">
                                {
                                    [
                                        "Mobil cihazınızın müəyyən edilmiş coğrafi ərazidən kənarda...",
                                        "Cihaz tipini seçin və IMEI nömrəsini daxil edin",
                                        "Şəxsi məlumatları daxil et",
                                        "Məlumatı yoxlayın",
                                    ][activeStep]
                                }
                            </div>
                        </section>
                    </form>
                </div>
                <hr className="divider services__divider my-4" />
                <div className="flex justify-center gap-4">
                    <BackButton
                        className={` text-[#304b82] border border-[#304b82] py-1 px-8 rounded-lg text-lg ${activeStep === 0 ? "hidden" : "block"
                            }`}
                        onClick={handlePreviousStep}
                    >
                        Geri
                    </BackButton>
                    <button
                        className="bg-[#304b82] text-white border border-[#304b82] py-1 px-8 rounded-lg text-lg"
                        onClick={handleNextStep}
                        disabled={activeStep === 3}
                    >
                        {activeStep === 3 ? "Tamamla" : "Növbəti"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Steps;
