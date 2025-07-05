import { ConnectKitButton } from "connectkit";

export const ButtonCK = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address }) => {
        return (
          <button onClick={show}>
            {isConnected ? address : "Custom Connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
