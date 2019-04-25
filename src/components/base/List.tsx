import React from 'react';

export interface ListProps<T> {
  items: T[];
  children(item: T, index?: number): JSX.Element;
}

const List = <T extends {}>(props: ListProps<T>) => {
  const { items, children } = props;
  return <>{items.map((item, index) => children(item, index))}</>;
};

export default List;
