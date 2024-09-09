import Link from "next/link";
import { Button } from "./components/Button";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./components/Footer";
import { Badge } from "./components/Badge";
import PulseDot from "./components/PulseDot";
import SectionTitle from "./components/SectionTitle";
import { Accordion } from "@radix-ui/react-accordion";
import AccordionProject from "./components/AccordionProject";
import { FaGithub } from "react-icons/fa";
import {
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaXTwitter,
} from "react-icons/fa6";

const projects = [
  {
    color: "#473bf0",
    title: "Necto",
    subtitle: "Co-founder",
    description: `Necto is a data marketplace for everyday consumers that enables
    them to monetize their data while providing seamless access for data buyers.
    For the backend, I developed a secure and scalable GraphQL API using Go,
    handling data transactions, authentication, and third-party integrations.
    On the frontend, I created a web application for data buyers with Next.js
    and TypeScript, delivering a smooth user experience for browsing, filtering,
    and purchasing datasets, and integrated Stripe for payment processing.
    For data sellers, I developed an iOS app using SwiftUI, with OAuth2
    abstraction to connect third-party services, allowing sellers to securely
    manage and monetize their data. I also built and designed Necto’s landing page
    to guide both sellers and buyers through the onboarding process.`,
    techs: [
      "Go",
      "GraphQL",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "SwiftUI",
      "AWS",
      "Python",
    ],
    links: [
      "https://necto.co",
      "https://www.linkedin.com/company/necto-global",
      "https://github.com/francesco-necto",
    ],
  },
  {
    color: "#ff8c00",
    title: "Coal",
    subtitle: "NYU Project",
    description: `Coal is a web3 platform created to detect copyright
    infringement in music by leveraging Spotify's AI and a variation of the
    longest common subsequence algorithm. The platform converts MP3 files
    into MIDI format and analyzes small fragments of the song to identify
    potential matches. By breaking down tracks into these fragments, Coal
    efficiently checks for any similarities with other music pieces, making
    it a powerful tool for identifying copyright issues in the music industry.`,
    techs: ["Go", "React", "TypeScript", "Firebase"],
    links: ["https://github.com/cisc0f/coal"],
  },
  {
    title: "Hashgraph",
    subtitle: "Developer Relations Engineer",
    description: `At Hashgraph, I focused on spreading
    awareness about web3 technology and helping startups and
    individuals build decentralized applications (dApps) using
    the Hedera SDK and Solidity. My role involved providing
    guidance on leveraging these tools effectively, while also
    speaking at various events and hackathons tailored to web3
    developers. Through this, I helped foster innovation within
    the blockchain space and supported the growth of the developer
    community.`,
    techs: [
      "Solidity",
      "Go",
      "JavaScript",
      "Java",
      "Hedera SDK",
      "Metamask SDK",
    ],
    links: [
      "https://hedera.com/blog/how-to-exempt-hedera-accounts-from-custom-token-fees",
      "https://hedera.com/blog/how-to-send-and-receive-hedera-tokens-using-smart-contracts-part-2-solidity",
      "https://hedera.com/blog/how-to-send-and-receive-hedera-tokens-using-smart-contracts-part-1-sdks",
      "https://hedera.com/blog/how-to-manage-hedera-tokens-using-smart-contracts",
      "https://hedera.com/blog/how-to-create-hedera-tokens-part-2-non-fungible-tokens",
      "https://hedera.com/blog/how-to-create-hedera-tokens-part-1-fungible-tokens",
      "https://github.com/cisc0f/hedera",
      "https://github.com/cisc0f/hedera-dapp-example",
      "https://github.com/cisc0f/hedera-mlh-hack-on-chain",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <div className="h-section relative flex items-center justify-center">
        <div className="absolute top-0 left-0 text-accent p-10">
          <Title text="FRANCESCO COACCI" />
        </div>
        <div className="px-5 md:w-1/2 h-full text-center flex flex-col gap-5 justify-center items-center">
          <Badge variant="outline" className="text-md flex flex-row gap-2">
            <PulseDot /> Available
          </Badge>
          <Subtitle text="Ciao! I’m a NYC-based full-stack engineer with Italian roots. Blending creativity and code to build the future." />
          <Button asChild variant="outline" className="text-xl">
            <Link href="mailto:francesco@coacci.it">
              Let&apos;s Talk <FiArrowRight className="ml-2" />
            </Link>
          </Button>
          <div className="flex flex-row items-center justify-center gap-4">
            <Link
              target="_blank"
              href="https://github.com/cisc0f"
              className="p-1 hover:bg-primary rounded-md transition-colors"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://linkedin.com/in/francesco-coacci"
              className="p-1 hover:bg-primary rounded-md transition-colors"
            >
              <FaLinkedin size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://x.com/francescocoacci"
              className="p-1 hover:bg-primary rounded-md transition-colors"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://instagram.com/francescocoacci"
              className="p-1 hover:bg-primary rounded-md transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://open.spotify.com/user/frencita7866"
              className="p-1 hover:bg-primary rounded-md transition-colors"
            >
              <FaSpotify size={20} />
            </Link>
          </div>
        </div>
        <div className="text-end text-accent absolute bottom-0 right-0 p-10 hover-underline">
          <Title text="FULL-STACK ENGINEER" />
        </div>
      </div>

      <div className="min-h-section bg-foreground p-10 flex flex-col gap-10">
        <SectionTitle text="Selected Work" />
        <Accordion
          type="single"
          className="md:px-10 text-2xl md:text-4xl text-background flex flex-col gap-5"
          collapsible
        >
          {projects.map((prj, index) => (
            <AccordionProject
              key={index}
              index={index}
              color={prj.color}
              title={prj.title}
              subtitle={prj.subtitle}
              description={prj.description}
              techs={prj.techs}
              links={prj.links}
            />
          ))}
        </Accordion>
      </div>

      <Footer />
    </div>
  );
}
