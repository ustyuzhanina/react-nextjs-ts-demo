import { useEffect, useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";


export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log("Counter: " + counter);
    return function cleanup() {
      console.log("Unmount");
    };
  });
    
  return (
    <div>
      <Htag tag={'h1'}>{counter}</Htag>
      <Button appearance='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam repellendus fugiat deleniti possimus est dicta voluptatibus dolor distinctio quo, quibusdam eligendi iusto, quis modi odit provident, accusantium iste ipsam?
      </P>
      <P fontSize="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam repellendus fugiat deleniti possimus est dicta voluptatibus dolor distinctio quo, quibusdam eligendi iusto, quis modi odit provident, accusantium iste ipsam?
      </P>
      <Tag size="m">
        Lorem ipsum 
      </Tag>
      <Tag size="m" color="red">
        Lorem ipsum 
      </Tag>
      <Tag size="s" color="grey">
        Lorem ipsum 
      </Tag>
      <Tag size="m" color="green">
        Lorem ipsum 
      </Tag>
      <Tag size="s" color="primary" href="#">
        Lorem ipsum 
      </Tag>
      <Rating rating={3}/>
    </div>
  );
}
