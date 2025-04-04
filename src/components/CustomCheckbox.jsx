const CustomCheckbox = ({checked, onChange}) => {
    return (
        <div
            className="inline-flex items-center cursor-pointer"
            onClick={onChange}
        >
            <div
                tabIndex={0}
                className={`w-[23px] h-[23px] border-[1px] border-[#CDCDCD] rounded-[6px] flex items-center justify-center active:bg-[#5087F8] active:border-[#5087F8] relative transition-colors duration-300 ease-in-out
          ${checked ? 'bg-[#2469F6] border-[#2469F6]' : 'bg-white'}
          focus:ring-2 focus:ring-[#E9F0FE] focus:outline-none focus:ring-offset-0 focus:box-shadow-none`}>
                {checked && (
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.68 6.592L6.22879 11.5272C6.24925 11.5454 6.28055 11.5437 6.29899 11.5235L16.32 0.519997"
                            stroke="white"
                            strokeLinecap="round"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default CustomCheckbox;
