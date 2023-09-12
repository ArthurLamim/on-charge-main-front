import {Flex} from "@radix-ui/themes";
import {HomeItem} from "../components/home-item/HomeItem.tsx";
import wallBoxImage from "/images/wallbox.png"
import carPlugImage from "/images/car-plug.png"
import {Banner} from "../components/banner";
import {Footer} from "../components/footer/Footer.tsx";

export function Home() {
 
  return (
    <Flex
      direction={"column"}
      gap={"7"}
    >
      <Banner.Container>
        <Banner.Image src={"/images/home-banner.jpg"} height={300} alt={"OnCharge"} />
        <Banner.Content>
          <Banner.Title title={"Inovação que move o mundo."} />
          <Banner.Subtitle subtitle={"Carregamento de veículos elétricos confiável!"} />
        </Banner.Content>
      </Banner.Container>
      <Flex gap={"9"} direction={"column"}>
        <HomeItem
          title="Somos uma empresa de mobilidade elétrica e rede de eletropostos inteligentes."
          subtitle="Uma rede conectada para facilitar a vida de usuários de carros elétricos e híbridos."
          button={{
            label: "Conheça nossas soluções",
            link: "/segmentos-e-solucoes"
          }}
          image={{
            src: wallBoxImage,
            alt: "WallBox"
          }}
          reverse={true}
        />
        <HomeItem
          title="Nosso objetivo é disseminar a eletrificação no mercado automotivo."
          subtitle="Oferecendo acesso a uma infraestrutura de carregamento de veículos elétricos."
          button={{
            label: "Encontre nossos pontos de recarga",
            link: "/pontos-recarga"
          }}
          image={{
            src: carPlugImage,
            alt: "Car Plug"
          }}
          reverse={false}
        />
      </Flex>
      <Footer />
    </Flex>
  )
}

