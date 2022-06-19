import React from 'react';
import { marked } from 'marked';
import { useAppSelector } from '../../hooks/redux';
import { selectEditorValue } from '../../redux/editor';

import './markdownpreview.scss';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}">${text}</a>`;

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
});

function MarkDownPreview() {
  const editorValue = useAppSelector(selectEditorValue);

  return (
    <div className="preview-container">
      <div className="strip">
        <div className="strip-text">Markdown Preview</div>
      </div>
      <div
        id="preview"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: marked.parse(editorValue),
        }}
      />
    </div>
  );
}

export default MarkDownPreview;
