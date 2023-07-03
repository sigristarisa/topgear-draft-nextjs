import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../app/layout";
import Header from "./components/Header";
import CarList from "./components/CarList";
import Car from "../helpers/models/carlisting";
import { Carlisting } from "../helpers/types";

export const getStaticProps: GetStaticProps = async () => {
  const res = await Car.findAll();
  const carlisting: Carlisting[] = await JSON.parse(JSON.stringify(res));

  return {
    props: {
      carlisting,
    },
  };
};

const Home = ({
  carlisting,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Header />
      <CarList carlisting={carlisting} />
    </Layout>
  );
};

export default Home;
