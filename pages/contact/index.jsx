import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import {
  Input,
  Card,
  Grid,
  Spacer,
  Avatar,
  Row,
  Text,
  Col,
} from "@nextui-org/react";
import { Search, Call } from "react-iconly";

export default function Contact() {
  const [clients, setClients] = useState();

  useEffect(() => {
    const baseUrl = globalThis.location.origin;
    const res = axios.get(`${baseUrl}/api/clients`);
    res.then(({ data }) => {
      setClients(data.clients);
    });
  }, []);

  const filterByEmail = (event) => {
    const email = event.target.value;
    if (!email) return setClients(clients);
    const clientFiltered = clients.filter((client) => {
      const emailClient = client?.email.toLowerCase();
      return emailClient.includes(email.toLowerCase());
    });
    setClients(clientFiltered);
  };

  return (
    <>
      <Head>
        <title>Moover | Contact</title>
      </Head>
      <section>
        <h2>Contact Client</h2>
        <div className="container">
          <Input
            contentRight={<Search />}
            css={{ mx: "auto" }}
            placeholder="Find by email"
            onChange={filterByEmail}
          />
          <Spacer />
          <Grid.Container gap={1}>
            {clients?.map(({ id, phone, email, profile }) => (
              <Grid xs={12} sm={6} key={id}>
                <Card clickable bordered css={{ overflow: "hidden", p: "0" }}>
                  <Card.Body>
                    <Row align="center" justify="space-between" gap={1}>
                      <Avatar
                        src={profile}
                        size="lg"
                        squared
                        bordered
                        color="gradient"
                      />
                      <Col>
                        <Text css={{ flexGrow: "1" }}>{email}</Text>
                        <Text b>{phone}</Text>
                      </Col>
                      <Avatar color="gradient" icon={<Call />} />
                    </Row>
                  </Card.Body>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </div>
      </section>
      <style jsx>{`
        section {
          position: relative;
          width: 100%;
          height: calc(100vh - 70px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .container {
          width: 100%;
          aspect-ratio: 1;
          max-width: 600px;
          display: block;
          text-align: center;
        }
      `}</style>
    </>
  );
}
