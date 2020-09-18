import React, { ReactElement } from 'react';

export default function MyComponent({
  name = '기본이름',
}: {
  name?: string;
}): ReactElement {
  return <div>안녕하세요, 제 이름은 {name} 입니다.</div>;
}
