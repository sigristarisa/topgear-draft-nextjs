import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "./components/Layout/Layout";
import CarList from "./components/CarList/CarList";
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
      <CarList carlisting={carlisting} />
    </Layout>
  );
};

export default Home;