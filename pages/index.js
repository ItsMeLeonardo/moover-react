import Head from "next/head";
import NextLink from "next/link";
import { Text, Button, Spacer, Card } from "@nextui-org/react";

const heroImg =
  "https://images.unsplash.com/photo-1618066296858-2046a4a39c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnklMjBuZW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Moover</title>
          <meta
            name="description"
            content="We provide service of moving packages in safe and sanitized manner in these difficult times"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
          <article>
            <h1>
              Create your own
              <span> last mile logistics </span>
              website and APP!
            </h1>
            <Text h2>We are Moover</Text>
            <Spacer />
            <Text h4>
              Power your business, open your account and discover everything you
              can do
            </Text>
            <Spacer />
            <NextLink href="/contact">
              <a>
                <Button color="gradient" shadow>
                  Get started
                </Button>
              </a>
            </NextLink>
          </article>
          <picture>
            <Card.Image
              objectFit="cover"
              width="100%"
              height="100%"
              src={heroImg}
            />
          </picture>
        </section>
      </div>
      <style jsx>{`
        section {
          width: 100%;
          height: 100%;
          display: flex;
        }
        article {
          width: 100%;
          flex-grow: 0;
        }
        h1 {
          font-size: 4rem;
          line-height: 4.25rem;
          max-width: 15ch;
        }
        h1 span {
          font-size: 72px;
          background: -webkit-linear-gradient(#7928caee, #f21361);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        picture {
          display: none;
        }

        @media (min-width: 768px) {
          article {
            width: 70%;
          }
          picture {
            display: flex;
            position: relative;
            flex-grow: 1;
            max-width: 320px;
            aspect-ratio: 2/1;
            width: 100%;
            transform: translate(25%, 5%);
          }
        }
        @media (min-width: 1024px) {
          article {
            width: 40%;
          }
          picture {
            max-width: 550px;
          }
        }
      `}</style>
    </>
  );
}
