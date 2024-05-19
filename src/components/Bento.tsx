import AboutBlock from "./AboutBlock";
import HeaderBlock from "./HeaderBlock";
import LocationBlock from "./LocationBlock";
import MessageListBlock from "./MessageListBlock";
import SocialsBlock from "./SocialsBlock";

function Bento() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 text-balance">
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <MessageListBlock />
      </div>
    </div>
  );
}

export default Bento;
