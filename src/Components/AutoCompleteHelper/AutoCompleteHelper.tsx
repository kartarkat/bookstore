import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./AutoCompleteHelper.scss";

type AutoCompleteProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  optionLabelKey: string;
  optionValueKey: string;
  apiUrl: string;
  debounceTime?: number;
};

// interface Option {
//   address: string[];
// }

interface Option {
  [key: string]: any;
}

const AutoCompleteHelper: React.FC<AutoCompleteProps> = ({
  searchValue,
  onSearchChange,
  optionLabelKey,
  optionValueKey,
  apiUrl,
  debounceTime = 300
}) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId;
    if (searchValue.length > 0) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        axios
          .get(apiUrl, { params: { s: searchValue } })
          .then((response) => {
            setOptions(response.data.map((option) => ({ label: option[optionLabelKey], value: option[optionValueKey] })));
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });
      }, debounceTime);
    } else {
      setOptions([]);
    }
    return () => clearTimeout(timeoutId);
  }, [apiUrl, debounceTime, optionLabelKey, optionValueKey, searchValue]);

  const handleOptionSelect = (option) => {
    onSearchChange(option.label);
    setOptions([]);
  };

  return (
    <div className="auto-complete-helper">
      {loading && <div className="auto-complete-helper__loading">Loading...</div>}
      {options.length > 0 && (
        <div className="auto-complete-helper__menu">
          {options.map((option, index) => (
            <div className="auto-complete-helper__option" key={index} onClick={() => handleOptionSelect(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteHelper;
