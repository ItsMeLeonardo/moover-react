import { useState, memo } from "react";

import { Input, Loading, Tooltip } from "@nextui-org/react";
import { Search } from "react-iconly";

import KeywordResult from "./KeywordResults";

function SearchInput({
  label = "Min 3 characters",
  loading = false,
  results,
  onChange,
  onClick,
} = {}) {
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    const keyword = event.target.value;
    if (!keyword) return setValue("");
    setValue(keyword);

    if (keyword.length < 3) return;
    onChange(value);
  };

  return (
    <Tooltip
      trigger="" // this necessary to show tooltip when write a word
      visible={value?.length >= 3}
      placement="bottom"
      content={
        <KeywordResult onClick={onClick} results={results} label="place_name" />
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
        contentRight={loading ? <Loading /> : <Search />}
      />
    </Tooltip>
  );
}

export default memo(SearchInput);
