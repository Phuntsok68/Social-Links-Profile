import Image from "./Image";
import Intro from "./Intro";
import Links from "./Links";
const social_links = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];
export default function App() {
  return (
    <div className="app">
      <Image />
      <Intro />
      <Links social_links={social_links} />
    </div>
  );
}
