import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      {isOpen && <div>{children}</div>}
    </div>
  );
}

export default Accordion;
