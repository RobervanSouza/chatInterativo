import { createRoot } from"react-dom/client";
import { App } from "./app";
import GlobalStyles from "./style/global";


const root =createRoot(document.querySelector("#root"));

root.render(
<>
        <App />
        <GlobalStyles/>
</>
);