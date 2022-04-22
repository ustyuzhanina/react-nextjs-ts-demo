import { Htag } from "../components";
import { Button } from "../components";


export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag={'h1'}>Курсы по Photoshop</Htag>
      <Button appearance='primary' arrow="right">Кнопка</Button>
      <Button appearance='ghost' arrow="down">Кнопка</Button>
    </div>
  );
}
