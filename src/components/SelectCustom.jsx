import Select from "react-select"

const SelectCustom = ({ defaultValue, name, options, onChange, styles }) => (
    <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={defaultValue}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isRtl={false}
        isSearchable={true}
        name={name}
        options={options}
        onChange={onChange}
        styles={styles}
    />
)

export default SelectCustom