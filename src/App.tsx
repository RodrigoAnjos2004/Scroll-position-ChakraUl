import * as React from "react";
import { Box, Center, chakra, Heading, Img } from "@chakra-ui/react";
import { Keyframes, Scroll } from "scrollex";

const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const keyframes: Record<string, Keyframes> = {
  headerText: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateY: 20
    },
    [section.bottomAt("container-top")]: {
      translateY: 200
    }
  }),
  headerImage: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateY: 0
    },
    [section.bottomAt("container-top")]: {
      translateY: 125
    }
  }),
  galleryImage: ({ section, data }) => ({
    [section.topAt("container-top")]: {
      translateZ: data.initialZ
    },
    [section.bottomAt("container-bottom")]: {
      translateZ: data.initialZ + 510
    }
  }),
  footerText: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateY: 200
    },
    [section.bottomAt("container-bottom")]: {
      translateY: 0
    }
  })
};

const images = [
  {
    x: -600,
    y: -500,
    z: -200,
    src:
      "https://www.hypeness.com.br/1/2020/05/sandman-download-gra%CC%81tis-capa-1.png"
  },
  {
    x: -100,
    y: -600,
    z: -300,
    src:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d582cec7-2d5d-4772-8df6-e67d7476457c/d9fnj7z-e8d4c0db-d120-4ee0-9df4-4fa7ccd31be8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1ODJjZWM3LTJkNWQtNDc3Mi04ZGY2LWU2N2Q3NDc2NDU3Y1wvZDlmbmo3ei1lOGQ0YzBkYi1kMTIwLTRlZTAtOWRmNC00ZmE3Y2NkMzFiZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SrzIFlepXJmgWxkkh38uMrisusitj9E57ETSj7Jm9os"
  },
  {
    x: -600,
    y: -500,
    z: -200,
    src:
      "https://www.hypeness.com.br/1/2020/05/sandman-download-gra%CC%81tis-capa-1.png"
  },
  {
    x: 600,
    y: -500,
    z: -100,
    src:
      "https://sucodemanga.com.br/wp-content/uploads/2019/07/sandman-neil-gaiman.jpg"
  },
  {
    x: 0,
    y: -100,
    z: 0,
    src:
      "https://rollingstone.uol.com.br/media/_versions/sandman_foto_reproducao_dc_comics-vertigo_widelg.jpg"
  },
  {
    x: -450,
    y: 300,
    z: 100,
    src:
      "https://i0.wp.com/alternativanerd.com.br/wp-content/uploads/2019/07/AN_Sandman.jpeg?fit=640%2C360&ssl=1"
  },
  {
    x: 400,
    y: 250,
    z: 200,
    src:
      "https://i.pinimg.com/736x/29/c1/97/29c1975a9ba96b6d9ddb40b566c8891a.jpg"
  }
];

export default function App() {
  return (
    <ScrollContainer
      scrollAxis="y"
      height="100vh"
      width="100vw"
      bg="rgba(20, 19, 21, .96)"
      color="black.400"
    >
      <ScrollSection h="100vh" pos="relative">
        <ScrollItem keyframes={keyframes.headerImage} pos="absolute" inset={0}>
          <Img
            src="https://images.wallpaperscraft.com/image/single/the_sandman_comics_neil_gaiman_98470_1920x1080.jpg"
            objectFit="cover"
            h="100%"
            w="100%"
            transform="scale(1.25)"
            borderRadius="10"
          />
        </ScrollItem>
        <Center h="100%">
          <ScrollItem keyframes={keyframes.headerText}>
            <Heading fontSize="9xl">Scroll</Heading>
          </ScrollItem>
        </Center>
      </ScrollSection>
      <ScrollSection height="500vh">
        <Box
          pos="sticky"
          top={0}
          h="100vh"
          style={{ perspective: 600 }}
          overflow="hidden"
        >
          {images.map((image) => {
            return (
              <ScrollItem
                key={image.src}
                keyframes={keyframes.galleryImage}
                pos="absolute"
                borderRadius="30px"
                inset={0}
                display="grid"
                placeItems="center"
                left={image.x}
                top={image.y}
                data={{ initialZ: image.z }}
              >
                <Img src={image.src} h="250px" objectFit="cover" />
              </ScrollItem>
            );
          })}
        </Box>
      </ScrollSection>
      <ScrollSection h="100vh">
        <Center h="100%">
          <ScrollItem keyframes={keyframes.footerText}>
            <Heading fontSize="9xl">Scroll?</Heading>
          </ScrollItem>
        </Center>
      </ScrollSection>
    </ScrollContainer>
  );
}
