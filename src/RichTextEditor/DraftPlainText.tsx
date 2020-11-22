import React, { useEffect, useRef, useState } from 'react';
import { DraftEditorCommand, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const DraftPlainText: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);
  const onChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const focus = () => {
    editorRef.current && editorRef.current.focus();
  };

  const logState = () => {
    console.log(editorState.toJS());
    const contentState = editorState.getCurrentContent();
    console.log(contentState.hasText());
    console.log(contentState.getBlockMap());
    console.log(contentState.getBlockMap().first().getType());
  };

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState,
  ) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const _onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  useEffect(() => {
    focus();
  }, []);

  const styles = {
    root: {
      fontFamily: "'Helvetica', sans-serif",
      padding: 20,
      width: 600,
    },
    editor: {
      border: '1px solid #ccc',
      cursor: 'text',
      minHeight: 80,
      padding: 10,
    },
    button: {
      marginTop: 10,
    },
  };

  return (
    <div style={styles.root}>
      <button onClick={_onBoldClick}>Bold</button>
      <div style={styles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          // handleKeyCommand={handleKeyCommand}
          placeholder="Enter some text..."
          ref={editorRef}
        />
      </div>
      <input
        style={styles.button}
        type="button"
        value="Log State"
        onClick={logState}
      />
    </div>
  );
};

export default DraftPlainText;
