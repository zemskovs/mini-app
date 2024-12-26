import { AppRoot, Placeholder } from "@telegram-apps/telegram-ui";
import "@telegram-apps/telegram-ui/dist/styles.css";
import './index.css';
import exampleCode from './assets/exampleCode.png'

function App() {
  return (
    <AppRoot>
      <Placeholder header="Ваша карта" description="Покажите чтобы отсканировать">
        <img
          alt="Telegram sticker"
          src={exampleCode}
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    </AppRoot>
  );
}

export default App;
