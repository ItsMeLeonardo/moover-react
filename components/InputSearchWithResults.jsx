import { useState, memo } from "react";

import { Input, Loading, Tooltip } from "@nextui-org/react";
import { Search } from "react-iconly";

import KeywordResult from "./KeywordResults";

// { propToDisplayResult } is the property that has the information to be displayed in the tooltip
function SearchInput({
  label = "Min 3 characters",
  loading = false,
  results,
  onChange,
  onClick,
  propToDisplayResult,
  clearResultsAfterClick,
} = {}) {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    const keyword = event.target.value;
    if (!keyword) return setValue("");
    setValue(keyword);
    if (keyword.length < 3) return;
    onChange(value);
  };

  const handleClick = (result) => {
    onClick(result);
    if (clearResultsAfterClick) setValue("");
  };

  return (
    <Tooltip
      trigger="" // this necessary to show tooltip when write a word
      visible={value?.length >= 3}
      placement="bottom"
      content={
        <KeywordResult
          onClick={handleClick}
          results={results}
          label={propToDisplayResult}
        />
      }
    >
      <Input
        onChange={handleChange}
        placeholder={label}
        type="search"
        readOnly={loading}
        color="error"
        name="keyword"
        id="SearchInput"
        arial-label="Search"
        css={{ bg: "#333" }}
        onKeyPress={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        contentRight={loading ? <Loading /> : <Search />}
      />
    </Tooltip>
  );
}

export default memo(SearchInput);
