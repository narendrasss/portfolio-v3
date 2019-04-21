import React from 'react';

export interface ListProps<T> {
  items: T[];
  children(item: T): JSX.Element;
}

const List = <T extends {}>(props: ListProps<T>) => {
  const { items, children } = props;
  return <>{items.map(item => children(item))}</>;
};

export default List;
