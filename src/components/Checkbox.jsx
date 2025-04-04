const Checkbox = ({checked, onChange}) => {
    return (
        <div className="h-[35px] w-[35px] flex items-center justify-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="peer h-[23px] w-[23px] border-[1px] outline-none border-[#CDCDCD] rounded-[6px] focus:ring-2 focus:ring-[#E9F0FE] focus:ring-offset-0 active:bg-[#5087F8] active:border-[#5087F8] peer-checked:bg-[#FFCE22]"
            />

        </div>
    )
}

export default Checkbox;