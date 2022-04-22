import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={'h1'}>Курсы по Photoshop</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam repellendus fugiat deleniti possimus est dicta voluptatibus dolor distinctio quo, quibusdam eligendi iusto, quis modi odit provident, accusantium iste ipsam?
      </P>
      <P fontSize="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam repellendus fugiat deleniti possimus est dicta voluptatibus dolor distinctio quo, quibusdam eligendi iusto, quis modi odit provident, accusantium iste ipsam?
      </P>
      <P fontSize="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam repellendus fugiat deleniti possimus est dicta voluptatibus dolor distinctio quo, quibusdam eligendi iusto, quis modi odit provident, accusantium iste ipsam?
      </P>
    </div>
  );
}
