// // add(1)(1);
//
// // function add(leftSide: number) {
// //   return (rightSide: number) => leftSide + rightSide;
// // }
//
// import React from "react";
// import { preventDefault } from "./utils/react/preventDefault";
// import { stopPropagation } from "./utils/react/stopPopagation";
// import { pickFromSynteticEvent } from "./utils/react/pickFromSynteticEvent";
//
// const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;
// const addOne = add(1);
// const addSix = add(6);
// addOne(1);
//
// const withIdKey = withKey("id");
// const withIndexKey = withKey();
//
// function Feed(props: { blocks: IBlockProps[] }) {
//   return <div>{props.blocks.map(withIdKey(Block))}</div>;
// }
//
// interface IBlockProps {
//   title: string;
//   id: string;
// }
//
// function Block(props: IBlockProps) {
//   return <div>{props.title}</div>;
// }
//
// function withKey(key?: string) {
//   return <E, T extends React.ComponentType<E>>(component: T) =>
//     (props: E, index: number) =>
//       React.createElement(
//         component,
//         {...props, key: key ? props[key as keyof E] : index},
//   [],
//       );
// }
//
// function Input({
//   onChange,
//   value
// }: { onChange: (value: string) => void, value: string }) {
//   return (
//     <input value={value} onChange={getValue(onChange)} />
//   )
// }
//
// function Checkbox(props: {onChange: (value: boolean) => void, value: boolean}) {
//   return (
//     <input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
//   )
// }
//
// export const getValue = pickFromSynteticEvent<HTMLInputElement>()("value");
// export const getChecked = pickFromSynteticEvent<HTMLInputElement>()('checked');
//
// function NotStandardLink(props: any) {
//   return (
//     <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
//   )
// }
//
// interface InputParams {
//   onChange: (value: string) => void;
//   value: string;
// }
//
// function Input({value, onChange}: InputParams) {
//   return (
//     <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>
//   )
// }