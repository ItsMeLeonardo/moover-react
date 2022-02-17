import { Input, Avatar, Col, Spacer, Row, Text } from "@nextui-org/react";

const defaultAvatar =
  "https://i.pinimg.com/236x/29/68/3b/29683b54520b500a531ad18a4534c85e.jpg";

const packageListCss = {
  display: "flex",
  gap: "1rem",
  width: "100%",
  justifyContent: "flex-start",
  "@sm": {
    flexDirection: "column",
    alignItems: "center",
    gap: ".5rem",
    overflow: "auto",
    height: "100%",
    overflow: "auto",
  },
};

const packageItemCss = {
  bg: "$accents2",
  p: ".75rem",
  borderRadius: "1rem",
  cursor: "pointer",
  width: "auto",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  "@sm": {
    w: "95%",
    flexDirection: "row",
    p: ".5rem",
  },
};

export default function PackagesList() {
  return (
    <>
      <Col css={{ overflow: "hidden", p: ".5rem 0" }}>
        <form>
          <Input
            placeholder="Find your package"
            type="search"
            bordered
            color="secondary"
            helperText="min 3 characters"
            name="keyword"
            id="SearchInput"
            arial-label="Search"
            css={{ bg: "#333", w: "95%", mx: "auto" }}
          />
        </form>
        <Spacer y={1.5} />
        <Col css={packageListCss}>
          {[...new Array(8)].map((_, i) => (
            <Row
              key={i}
              align="center"
              justify="space-around"
              css={packageItemCss}
            >
              <Avatar size="md" src={defaultAvatar} />
              <Text
                h6
                size="14px"
                css={{
                  display: "none",
                  "@sm": {
                    display: "block",
                  },
                }}
              >
                User name
              </Text>
              <Text size="12px">15hs</Text>
            </Row>
          ))}
        </Col>
      </Col>
      <style jsx>{`
        form {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
