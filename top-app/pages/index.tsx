import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";


function Home({menu}: HomeProps): JSX.Element {
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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ol>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ol>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
