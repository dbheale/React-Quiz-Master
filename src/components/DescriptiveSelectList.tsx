import { ChangeEvent, useState } from "react";

export interface OptionValue {
  label: string | undefined;
  value: any;
  description?: string;
}

export interface SelectListOptions {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionValues: Array<OptionValue>;
  label: string;
  id: string;
  value: string | undefined;
}

export const getOptionValueLabel = (
  optionValues: OptionValue[],
  value: string | number | undefined
) => {
  return optionValues.find((f) => f.value == value)?.label ?? "Any";
};

export const DescriptiveSelectList = (options: SelectListOptions) => {
  const getDescription = (val: string | undefined) => {
    return options.optionValues.find((s) => s.value == val)?.description;
  };

  const [description, setDescription] = useState<string | undefined>(
    getDescription(options.value)
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDescription(getDescription(e.target.value));
    options.onChange(e);
  };

  return (
    <>
      <p>
        <label htmlFor={options.id}>{options.label}: </label>
        <select value={options.value} onChange={onChange} id={options.id}>
          {options.optionValues.map(({ value, label }, index) => (
            <option key={index + value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </p>
      <p>
        <code>{description}</code>
      </p>
    </>
  );
};
