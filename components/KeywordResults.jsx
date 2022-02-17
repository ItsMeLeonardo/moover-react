import { Button, Text } from "@nextui-org/react";

export default function KeywordResult({ results, label } = {}) {
  if (results?.length === 0 || !results) {
    return (
      <Button disabled css={{ bg: "$accents1" }}>
        <Text h6 css={{ bg: "transparent" }}>
          0 results for this keyword
        </Text>
      </Button>
    );
  }

  return (
    <>
      {results.map((result) => (
        <Button
          key={result.id}
          css={{ bg: "$accents1", "&:hover": { bg: "$gray900" } }}
        >
          <Text h6 css={{ bg: "transparent" }}>
            {result[label]}
          </Text>
        </Button>
      ))}
    </>
  );
}
