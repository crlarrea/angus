import { Poppins, Story_Script } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const story_script = Story_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export { poppins, story_script };
