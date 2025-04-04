import {useState} from 'react';
import CustomCheckbox from "./components/CustomCheckbox.jsx";

function App() {
    const [checked, setChecked] = useState([false, false, false, false, false]);

    const handleCheckboxChange = (index) => {
        const updatedCheckedState = checked.map((item, idx) =>
            idx === index ? !item : item
        );
        setChecked(updatedCheckedState);
    };

    const handleAllPagesChange = () => {
        const allChecked = !checked[0];
        const updatedCheckedState = checked.map(() => allChecked);
        setChecked(updatedCheckedState);
    };

    const setInitialCheckedState = () => {
        const initialCheckedState = [false, false, false, false, false];
        setChecked(initialCheckedState);
    };

    return (
        <div
            className="h-[326px] w-[370px] py-[10px] border-solid border-[1px] rounded-[6px] border-[#EEEEEE] shadow-[0px_8px_15px_0px_rgba(20,20,20,0.12),0px_0px_4px_0px_rgba(20,20,20,0.1)] flex flex-col">
            <div className="h-[42px] flex flex-row justify-between items-center p-[8px_15px_8px_22px]">
                <p>All pages</p>
                <div className="h-[35px] w-[35px] flex items-center justify-center">
                    <CustomCheckbox checked={checked[0]} onChange={handleAllPagesChange}/>
                </div>
            </div>
            <div className="h-[20px] flex justify-center items-center">
                <hr className="h-[0.7px] w-[340px] bg-[#CDCDCD]"/>
            </div>
            <div className="flex flex-col">
                {[...Array(4)].map((_, index) => (
                    <div key={index}
                         className="h-[42px] flex flex-row justify-between items-center p-[8px_15px_8px_22px]">
                        <p>Page {index + 1}</p>
                        <div className="h-[35px] w-[35px] flex items-center justify-center">
                            <CustomCheckbox checked={checked[index + 1]}
                                            onChange={() => handleCheckboxChange(index + 1)}/>
                        </div>
                    </div>
                ))}
                <div className="h-[10px] flex justify-center">
                    <hr className="h-[0.7px] w-[340px] bg-[#CDCDCD]"/>
                </div>
                <div className="h-[60px] flex justify-between items-center p-[10px_15px_10px_15px]">
                    <button
                        className="w-[340px] h-[40px] rounded bg-[#FFCE22] focus:[#FFD84D] focus:outline-none active:[#FFD84D] text-[14px]"
                        onClick={() => setInitialCheckedState()}>
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
