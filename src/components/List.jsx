import React from 'react';
import ListItem from './ListItem';

function List(props){

  return(
    <ul className="list">
      <ListItem name='둘리' address='서울시 쌍문동'>맥북프로 노트북</ListItem>
      <ListItem name='양광희' address = '서울시 공항동'>돈</ListItem>
      <ListItem name='조현우' address = '서울시 우장산동'>롤렉스</ListItem>
      <ListItem name='박소현' address = '서울시 화곡본동'>피자알불로</ListItem>
    </ul>
  );
}

export default List;