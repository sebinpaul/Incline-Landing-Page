import knowledge from "../../assets/card/knowledge.svg";
import learn from "../../assets/card/learn.svg";
import chat from "../../assets/card/chat.svg";
import create from "../../assets/card/create.svg";
import collaborate from "../../assets/card/collaborate.svg";

const cardList = [
  {
    img: knowledge,
    title: "Knowledge Base",
    tags: ["Create / Import"],
    description:
      "Build custom editors that align perfectly with your user's needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss.",
    link: "/features",
  },
  {
    img: learn,
    title: "Learn",
    tags: ["Cloud", "Try for free"],
    description:
      "Allow your users to collaborate in any document and media. Integrate live carets and cursors to show who is typing, support offline editing and sync content.",
    link: "/features",
  },
  {
    img: chat,
    title: "Learn",
    tags: ["Cloud", "Paid feature"],
    description:
      "Help your users perfecting their tone and crossing language barriers, Tiptap's Content AI transforms words into wonders. Write, refine, and captivate with ease.",
    link: "/features",
  },
  {
    img: create,
    title: "Create",
    tags: ["Cloud", "Paid feature"],
    description:
      "Integrate inline and document comments directly in your editor with Tiptap Comments. Ideal for collaboration, enabling real-time discussion and suggestions within the content.",
    link: "/features",
  },
  {
    img: collaborate,
    title: "Collaborate",
    tags: ["Cloud", "Try for free"],
    description:
      "Self-host your documents for full control, or opt for our secure, scalable cloud. Create and manipulate your documents any way you want, whether you're flying solo or on Cloud 9.",
    link: "/features",
  },
];

export default cardList;
