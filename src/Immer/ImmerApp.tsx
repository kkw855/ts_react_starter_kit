import React, { ReactElement, useCallback, useRef, useState } from 'react';
import produce from 'immer';

function ImmerApp(): ReactElement {
  const nextId = useRef(1);
  const [form, setForm] = useState<{
    name: string;
    username: string;
  }>({ name: '', username: '' });
  const [data, setData] = useState<{
    array: { id: number; name: string; username: string }[];
    uselessValue: null;
  }>({ array: [], uselessValue: null });

  // input 수정을 위한 함수
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { name, value } = e.target;

      setForm(
        produce((draft) => {
          draft[name] = value;
        }),
      );
    },
    [],
  );

  // form 등록을 위한 함수
  const onSubmit: React.FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 에 새 항목 등록
      setData(
        produce((draft) => {
          draft.array.push(info);
        }),
      );

      // form 초기화
      setForm({
        name: '',
        username: '',
      });

      nextId.current += 1;
    },
    [form],
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback((id: number) => {
    setData((data) => ({
      ...data,
      array: data.array.filter((info) => info.id !== id),
    }));
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
        <div>
          <ul>
            {data.array.map((info) => (
              <li key={info.id} onClick={() => onRemove(info.id)}>
                {info.username} ({info.name})
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default ImmerApp;
