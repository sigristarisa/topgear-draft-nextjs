import Layout from "../components/Layout/Layout";
import Carlistings from "../helpers/models/carlisting";

import { Carlisting } from "../helpers/types";

type Props = {
  name: string;
};

export const getStaticProps = async () => {
  const res = await Carlistings.findAllCarlisting();
  // const carlisting = JSON.stringify(res);

  // console.log("anything?", carlisting);

  console.log(JSON.parse(JSON.stringify(res)));
  return {
    props: {
      carlisting: JSON.parse(JSON.stringify(res)),
    },
  };
};

const Home = ({ carlisting }: any) => {
  return (
    <Layout>
      <div>hi</div>
      <ul>
        {carlisting.map((car: Carlisting) => {
          <li>{car.mileage}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default Home;
