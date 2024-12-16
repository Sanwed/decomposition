import {ReactElement} from "react";

/**
 * Кнопка для фильтрации новостей
 * @param handler
 * @param children
 * @constructor
 */
function NewsTabsButton({handler, children}: { children: ReactElement | string, handler: () => void }) {
  return (
    <button onClick={handler}>
      {children}
    </button>
  )
}

export default NewsTabsButton
