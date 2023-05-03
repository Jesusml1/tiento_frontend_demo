import { Global } from "@mantine/core";
import bold from "../fonts/IBMPlexMono-Bold.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "IBM Plex Mono",
            src: `url('${bold}')`,
            fontWeight: 700,
            fontStyle: "bold",
          },
        },
      ]}
    />
  );
}
