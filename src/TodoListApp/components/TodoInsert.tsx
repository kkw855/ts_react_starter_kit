import React, { ReactElement, useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/all';
import './TodoInsert.scss';

export default function TodoInsert({
  onInsert,
}: {
  onInsert: (text: string) => void;
}): ReactElement {
  const [value, setValue] = useState('');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [],
  );

  const onSubmit: React.FormEventHandler = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
