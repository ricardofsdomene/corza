import { Flex, Text, Icon, Image, SimpleGrid, Input } from "@chakra-ui/react";
import React, { useState } from "react";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaMailchimp,
  FaNetworkWired,
  FaPhone,
  FaPython,
  FaReact,
  FaTiktok,
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";

import useMediaQuery from "../utils/useMediaQuery";

export default function Page() {
  const { mobile, tablet, desktop } = useMediaQuery();

  return (
    <Flex flexDir="column">
      <Flex w="100%" bg="#d5fe41" flexDir="column">
        <Flex w="100%" p="6" px="8" align="center" justify="space-between">
          <Text fontFamily="Poppins" fontSize="1.4rem">
            Corza
          </Text>
          <Flex align="center">
            <Text
              borderRadius="full"
              bg="#333"
              color="#d5fe41"
              px="4"
              py="2"
              fontFamily="Poppins"
              fontWeight="bold"
              fontSize="1rem"
            >
              Entrar em contato
            </Text>
          </Flex>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <Flex
            maxW="100vw"
            flexDir="column"
            p="8"
            fontSize={mobile ? "2rem" : tablet ? "4.5rem" : "5.5rem"}
          >
            <Text fontFamily="Climate Crisis">Mão de obra</Text>
            <Text fontFamily="Climate Crisis">Qualificada</Text>
          </Flex>
        </Flex>
        <Flex w="100%" align="center">
          <Flex
            bg="#333"
            style={{
              height: 2,
              width: "5vw",
            }}
          />
          <Flex
            cursor="default"
            border="2px solid #333"
            borderRadius="full"
            px="6"
            py="2"
            justify="center"
            align="center"
          >
            <Text
              fontFamily="Poppins"
              whiteSpace="nowrap"
              fontSize={mobile ? "0.5rem" : "1rem"}
            >
              Landing Page
            </Text>
          </Flex>
          <Flex
            bg="#333"
            style={{
              height: 2,
              width: "8vw",
            }}
          />
          <Flex
            cursor="default"
            border="2px solid #333"
            borderRadius="full"
            px="6"
            py="2"
            justify="center"
            align="center"
          >
            <Text
              fontFamily="Poppins"
              whiteSpace="nowrap"
              fontSize={mobile ? "0.5rem" : "1rem"}
            >
              Trafego pago
            </Text>
          </Flex>
          <Flex
            bg="#333"
            style={{
              height: 2,
              width: "8vw",
            }}
          />
          <Flex
            cursor="default"
            border="2px solid #333"
            borderRadius="full"
            px="6"
            py="2"
            justify="center"
            align="center"
          >
            <Text
              fontFamily="Poppins"
              whiteSpace="nowrap"
              fontSize={mobile ? "0.5rem" : "1rem"}
            >
              Funil de venda
            </Text>
          </Flex>
          {desktop && (
            <Flex
              align="center"
              style={{
                transform: "rotate(-45deg)",
                transformOrigin: "top left",
              }}
            >
              <Flex
                bg="#333"
                style={{
                  marginTop: -12,
                  marginLeft: -5,
                  height: 2,
                  width: "15vw",
                  background: "black",
                }}
              />
              <Flex
                mt={-5}
                cursor="default"
                border="2px solid #333"
                borderRadius="full"
                px="6"
                py="2"
                justify="center"
                align="center"
              >
                <Text
                  fontFamily="Poppins"
                  fontSize={mobile ? "0.7rem" : "1rem"}
                >
                  🚀
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
        <Flex
          mt="10"
          flexDir="column"
          bg="#000"
          w="100%"
          py="8"
          pl="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Flex fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}>
            <Flex overflowX="hidden">
              <Text
                fontFamily="Climate Crisis"
                color="#d5fe41"
                whiteSpace="nowrap"
              >
                Resultados ✦ Resultados ✦ Resultados ✦ Resultados ✦ Resultados
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          borderTop="1px solid #333"
          bg="#000"
          w="100%"
          py={20}
          color="#d5fe41"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Flex p="8" flexDir="column" w={mobile ? "100%" : "55%"}>
            <Text
              fontFamily="Poppins"
              textAlign={mobile ? "center" : "left"}
              fontSize={mobile ? "1.9rem" : "2.6rem"}
              fontWeight="bold"
              mt={mobile ? -10 : 0}
            >
              Nós temos a solução para seu negócio digital
            </Text>
            <Text
              mt="6"
              fontFamily="Poppins"
              textAlign={mobile ? "center" : "left"}
              fontSize={mobile ? "1rem" : "1.55rem"}
            >
              Especializados em{" "}
              <span style={{ fontWeight: "bold" }}>landing pages</span>,{" "}
              <span style={{ fontWeight: "bold" }}>tráfego pago</span>,{" "}
              <span style={{ fontWeight: "bold" }}>lançamentos</span> e{" "}
              <span style={{ fontWeight: "bold" }}>copywriting</span>, ajudamos
              nossos clientes a{" "}
              <span style={{ fontWeight: "bold" }}>
                aumentar o engajamento, conversões e vendas.
              </span>
            </Text>
          </Flex>
          <Flex
            ml={desktop ? "0" : "8"}
            mt={mobile ? 10 : "0"}
            flexDir="column"
            pr="8"
          >
            <Image
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                width: mobile ? "100%" : 550,
                height: "auto",
                borderRadius: 50,
                border: "4px solid #d5fe41",
              }}
            />
            <Text
              fontFamily="Poppins"
              w="100%"
              textAlign="center"
              mt="4"
              fontSize="1rem"
            >
              Venha conhecer nosso time em Alphaville.
            </Text>
          </Flex>
        </Flex>
        <Flex
          borderTop="1px solid #333"
          w="100%"
          p="8"
          py={20}
          color="#000"
          flexDir="column"
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Text
            fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}
            fontFamily="Poppins"
            textAlign="center"
          >
            Os melhores serviços <br /> geram os maiores resultados
          </Text>
          <SimpleGrid mt="20" columns={[1, 1, 2, 2, 3, 4]} spacing="20px">
            <Flex
              bg="#000"
              flexDir="column"
              borderRadius="50"
              justify="space-between"
              color="#FFF"
              px="5"
            >
              <Image
                mb={mobile ? 130 : 150}
                mt={mobile ? 130 : 150}
                src="/i1.png"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Flex flexDir="column" p="8">
                <Text
                  bg="#000"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  px="6"
                  py="2"
                  fontFamily="Poppins"
                  textAlign={mobile ? "center" : "left"}
                  fontSize={mobile ? "1.4rem" : "1.7rem"}
                  fontWeight="bold"
                >
                  Copywriting
                </Text>
              </Flex>
            </Flex>

            <Flex
              bg="#000"
              flexDir="column"
              borderRadius="50"
              justify="space-between"
              color="#FFF"
              pt="20"
              px="5"
            >
              <Image
                src="/i4.png"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Flex flexDir="column" p="8">
                <Text
                  bg="#000"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  px="6"
                  py="2"
                  fontFamily="Poppins"
                  textAlign={mobile ? "center" : "left"}
                  fontSize={mobile ? "1.4rem" : "1.7rem"}
                  fontWeight="bold"
                >
                  Tráfego Pago
                </Text>
              </Flex>
            </Flex>
            <Flex
              bg="#000"
              flexDir="column"
              borderRadius="50"
              justify="space-between"
              color="#FFF"
              pt="20"
            >
              <Image
                src="/i2.png"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Flex flexDir="column" p="8">
                <Text
                  bg="#000"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  px="6"
                  py="2"
                  fontFamily="Poppins"
                  textAlign={mobile ? "center" : "left"}
                  fontSize={mobile ? "1.4rem" : "1.7rem"}
                  fontWeight="bold"
                >
                  Desenvolvimento
                </Text>
              </Flex>
            </Flex>
            <Flex
              bg="#000"
              flexDir="column"
              borderRadius="50"
              justify="space-between"
              color="#FFF"
              pt="20"
            >
              <Image
                src="/i3.png"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Flex flexDir="column" p="8">
                <Text
                  bg="#000"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  px="6"
                  py="2"
                  fontFamily="Poppins"
                  textAlign={mobile ? "center" : "left"}
                  fontSize={mobile ? "1.4rem" : "1.7rem"}
                  fontWeight="bold"
                >
                  Lançamento
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          mt="10"
          flexDir="column"
          bg="#000"
          w="100%"
          py={10}
          px="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Flex
            fontSize={mobile ? "2.5rem" : tablet ? "2.5rem" : "3.5rem"}
            align={mobile ? "Flex-end" : "center"}
            overflowX="hidden"
            flexDir={mobile ? "column" : "row"}
          >
            {mobile && (
              <Image
                src="/contact.png"
                style={{
                  width: 300,
                  height: "auto",
                }}
              />
            )}
            <Flex
              minW={300}
              justify="center"
              p={mobile ? "6" : 70}
              bg="#d5fe41"
              w="100%"
              h="-webkit-fit-content"
              borderRadius="25"
              flexDir="column"
            >
              <Text
                fontFamily="Poppins"
                color="#000"
                fontSize={mobile ? "1.2rem" : "2.5rem"}
                fontWeight="bold"
              >
                O que você está buscando?
              </Text>
              <Text
                fontFamily="Poppins"
                color="#000"
                fontSize={mobile ? "1rem" : "1.5rem"}
              >
                Fale com a gente, estamos de portas abertas.
              </Text>
              <Flex align="center" mt="6">
                <Icon ml="1" as={FaPhone} color="#000" fontSize="1rem" />
                <Text
                  ml={mobile ? "2" : "6"}
                  fontFamily="Poppins"
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "1.6rem" : "1.5rem"}
                >
                  +11 91579-9139
                </Text>
              </Flex>
              <Flex align="center" mt="6">
                <Icon as={IoIosMail} color="#000" fontSize="1.3rem" />
                <Text
                  ml={mobile ? "2" : "6"}
                  fontFamily="Poppins"
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "1rem" : "1.5rem"}
                >
                  contato@corzadigital.com
                </Text>
              </Flex>
              <Flex
                mt="6"
                w={mobile ? "100%" : "-webkit-fit-content"}
                bg="#000"
                justify="center"
                align="center"
                borderRadius="full"
                py="3"
                px="6"
                cursor="pointer"
              >
                <Text
                  fontFamily="Poppins"
                  color="#FFF"
                  fontSize={mobile ? "0.9rem" : "1.2rem"}
                  fontWeight="bold"
                >
                  Entrar em contato por aqui
                </Text>
              </Flex>
            </Flex>
            {!mobile && (
              <Image
                src="/contact.png"
                style={{
                  width: 300,
                  height: "auto",
                }}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          bg="#000"
          w="100%"
          py={10}
          px="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Text
            fontSize={mobile ? "2rem" : tablet ? "2rem" : "3rem"}
            fontFamily="Poppins"
            textAlign="left"
          >
            Artigos recentes
          </Text>
          <SimpleGrid mt="10" columns={[1, 1, 2, 2, 3, 4]} spacing="20px">
            <Flex
              bg="#222"
              flexDir="column"
              borderRadius="15"
              justify="space-between"
              color="#FFF"
              py="6"
              px="8"
            >
              <Image
                src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                }}
              />
              <Flex mt="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Como criar uma landing page altamente conversível
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, explicamos como criar uma página de destino
                  altamente conversível, com dicas para design, conteúdo,
                  call-to-actions e teste de elementos.
                </Text>
                <Flex
                  cursor="pointer"
                  borderRadius="full"
                  bg="#FFF"
                  w="100%"
                  justify="center"
                  align="center"
                  py="2"
                  mt="6"
                >
                  <Text
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                    fontFamily="Poppins"
                  >
                    Saiba mais
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bg="#222"
              flexDir="column"
              borderRadius="15"
              justify="space-between"
              color="#FFF"
              py="6"
              px="8"
            >
              <Image
                src="https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                }}
              />
              <Flex mt="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  A importância do copywriting em marketing digital
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, discutimos a importância do copywriting em
                  marketing digital, incluindo dicas para criação de conteúdo
                  persuasivo e otimização para SEO.
                </Text>
                <Flex
                  cursor="pointer"
                  borderRadius="full"
                  bg="#FFF"
                  w="100%"
                  justify="center"
                  align="center"
                  py="2"
                  mt="6"
                >
                  <Text
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                    fontFamily="Poppins"
                  >
                    Saiba mais
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bg="#222"
              flexDir="column"
              borderRadius="15"
              justify="space-between"
              color="#FFF"
              py="6"
              px="8"
            >
              <Image
                src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                }}
              />
              <Flex mt="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Os benefícios de investir em tráfego pago
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, discutimos os benefícios de investir em tráfego
                  pago, incluindo segmentação precisa de público-alvo, ROI
                  mensurável e resultados rápidos
                </Text>
                <Flex
                  cursor="pointer"
                  borderRadius="full"
                  bg="#FFF"
                  w="100%"
                  justify="center"
                  align="center"
                  py="2"
                  mt="6"
                >
                  <Text
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                    fontFamily="Poppins"
                  >
                    Saiba mais
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              bg="#222"
              flexDir="column"
              borderRadius="15"
              justify="space-between"
              color="#FFF"
              py="6"
              px="8"
            >
              <Image
                src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 10,
                }}
              />
              <Flex mt="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Como lançar seu produto ou serviço com sucesso
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, fornecemos dicas para um lançamento
                  bem-sucedido, desde a fase de pré-lançamento até o dia do
                  lançamento.
                </Text>
                <Flex
                  cursor="pointer"
                  borderRadius="full"
                  bg="#FFF"
                  w="100%"
                  justify="center"
                  align="center"
                  py="2"
                  mt="6"
                >
                  <Text
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                    fontFamily="Poppins"
                  >
                    Saiba mais
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          bg="#000"
          color="#FFF"
          justify="space-between"
          w="100%"
          py={20}
          px={10}
          fontFamily="Poppins"
          align={mobile ? "flex-start" : "center"}
          flexDir={mobile ? "column" : "row"}
        >
          <Flex flexDir="column">
            <Text
              fontFamily="Poppins"
              mb="4"
              fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}
            >
              Corza®
            </Text>
          </Flex>
          <Flex flexDir="column"></Flex>
          <Flex flexDir="column">
            <Text fontFamily="Poppins" fontSize={mobile ? "0.7rem" : "1rem"}>
              Corza Digital Consultoria LTDA.
            </Text>
            <Text
              mt="4"
              fontFamily="Poppins"
              fontSize={mobile ? "0.7rem" : "1rem"}
            >
              Calçada Antares, 1444 - Alphaville | CEP: 06443-065
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
