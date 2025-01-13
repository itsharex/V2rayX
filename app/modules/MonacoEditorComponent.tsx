import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Editor = ({
  className,
  defaultLanguage = 'javascript',
  defaultValue = '',
  onChange,
  options = {},
}) => {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useLayoutEffect(() => {
    let monacoCleanup = null;

    async function initMonacoEditor() {
      // Dynamically import monaco-editor
      const monaco = await import('monaco-editor');

      console.log('Monaco loaded:', monaco);
      // Define the Monaco Environment
      self.MonacoEnvironment = {
        getWorker(_, label) {
          const getWorkerModule = (workerPath: string, name: string) => {
            return new Worker(new URL(workerPath, import.meta.url), {
              name,
              type: 'module',
            });
          };

          switch (label) {
            case 'json':
              return getWorkerModule('monaco-editor/esm/vs/language/json/json.worker?worker', label);
            // case 'css':
            // case 'scss':
            // case 'less':
            //   return getWorkerModule('monaco-editor/esm/vs/language/css/css.worker?worker', label);
            // case 'html':
            // case 'handlebars':
            // case 'razor':
            //   return getWorkerModule('monaco-editor/esm/vs/language/html/html.worker?worker', label);
            // case 'typescript':
            // case 'javascript':
            //   return getWorkerModule(
            //     'monaco-editor/esm/vs/language/typescript/ts.worker?worker',
            //     label,
            //   );
            default:
              return getWorkerModule('monaco-editor/esm/vs/editor/editor.worker?worker', label);
          }
        },
      };

      if (containerRef.current) {
        // Create the editor
        editorRef.current = monaco.editor.create(containerRef.current, {
          value: defaultValue,
          language: defaultLanguage,
          ...options,
        });

        // Listen to changes and propagate them up
        const model = editorRef.current.getModel();
        const subscription = model.onDidChangeContent(() => {
          const currentValue = model.getValue();
          onChange?.(currentValue);
        });

        // Store cleanup in a variable so it’s accessible to the effect's cleanup
        monacoCleanup = () => {
          subscription.dispose();
          editorRef.current?.dispose();
        };
      }
    }

    initMonacoEditor();

    // Cleanup
    return () => {
      if (monacoCleanup) {
        monacoCleanup();
      }
    };
  }, [defaultLanguage, defaultValue, onChange, options]);

  // Keep the Monaco value in sync if `defaultValue` changes outside
  useEffect(() => {
    if (editorRef.current) {
      const editorModel = editorRef.current.getModel();
      if (editorModel && editorModel.getValue() !== defaultValue) {
        editorModel.setValue(defaultValue);
      }
    }
  }, [defaultValue]);

  return (
    <div
      ref={containerRef}
      className={className} // For example, "h-48" with Tailwind
      style={{
        border: '1px solid #ddd',
      }}
    />
  );
};

export default Editor;
