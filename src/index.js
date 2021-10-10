import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';
import addLarge from 'san-large-number-sum';
import logo from './images/bilibili.png';
import { a } from './utils/treeShaking';
import './index.less';

function A() {
  const onClick = () => {
    a();
    import('lodash/join').then(({ default: join }) => {
      console.log(join(['a', 'b', 'c']));
    });
    addLarge('1111', '2222');
  };

  return (
    <div>
      <Button type="primary">antd Button</Button>
      cccxsssss
      <Button onClick={onClick}>jjjj</Button>
      <h1 className="a">ssjjj</h1>
      <img src={logo} alt="" />
    </div>
  );
}

ReactDom.render(<A />, document.getElementById('root'));
