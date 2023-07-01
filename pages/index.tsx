import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "../components/Layout/Layout";
import Carlistings from "../helpers/models/carlisting";
import { Carlisting } from "../helpers/types";

export const getStaticProps: GetStaticProps = async () => {
  const res = await Carlistings.findAllCarlisting();
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
  console.log("carlisting", carlisting);
  return (
    <Layout>
      <div>hi</div>
      <ul>
        {carlisting.map((car: Carlisting) => (
          <li key={car.id}>{car.description}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
