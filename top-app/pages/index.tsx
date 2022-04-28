import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { Layout, withLayout } from '../layout/Layout';


function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);


    
  return (
    <>
      <Htag tag={'h1'}>Рейтинги!</Htag>
      <Button appearance='primary' arrow="right" >Кнопка</Button>
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
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
