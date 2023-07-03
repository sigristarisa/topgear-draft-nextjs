import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useContext } from "react";
import Layout from "../pages/components/Layout";
import CarList from "./components/CarList";
import Car from "../helpers/models/carlisting";
import Make from "../helpers/models/make";
import { Carlisting, MakeType } from "../helpers/types";
import { filterContext } from "../helpers/createContext";

export const getStaticProps: GetStaticProps = async () => {
  const carRes = await Car.findAll();
  const makeRes = await Make.findAll();
  const carlisting: Carlisting[] = await JSON.parse(JSON.stringify(carRes));
  const makes: MakeType[] = await JSON.parse(JSON.stringify(makeRes));

  return {
    props: {
      carlisting,
      makes,
    },
  };
};

const Home = ({
  carlisting,
  makes,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <main className="w-9/12 mx-auto flex justify-center border-2 border-red-500 border-solid">
        <aside className="w-3/12">
          <ul>
            {makes.map((make: Make) => (
              <li key={make.id}>{make.name}</li>
            ))}
          </ul>
        </aside>
        <aside className="w-9/12">
          <CarList carlisting={carlisting} />
        </aside>
      </main>
    </Layout>
  );
};

export default Home;
