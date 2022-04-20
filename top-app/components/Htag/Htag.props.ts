import { ReactNode } from "react";

export interface HtagProps {
  tag: 'h1' | 'h2' | 'h3';
  //свойство children описывает текст, который находится внутри тега заголовка
  children: ReactNode;
}