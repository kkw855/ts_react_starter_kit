import React, { useEffect, useRef, useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import 'draft-js/dist/Draft.css';

const styles = {};

const DraftRich: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const focus = () => {
    editorRef.current && editorRef.current.focus();
  };

  useEffect(() => {
    focus();
  }, []);

  return <></>;
};

export default DraftRich;
