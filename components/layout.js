import { Container } from "@nextui-org/react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container
      md
      css={{
        p: ".5rem",
        background: "$gray900",
        minHeight: "100vh",
        h: "100%",
        "@smMax": { mb: "$24" },
      }}
    >
      <Navbar />
      <main>{children}</main>
    </Container>
  );
}
