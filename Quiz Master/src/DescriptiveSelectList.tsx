import { ChangeEvent, useState } from "react";

export interface OptionValue {
  label: string | undefined;
  value: any;
  description: string | undefined;
}

export interface SelectListOptions {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  optionValues: Array<OptionValue>;
  label: string;
  id: string;
  value: string | undefined;
}

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
          {options.optionValues.map(({ value, label }) => (
            <option key={value} value={value}>
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
