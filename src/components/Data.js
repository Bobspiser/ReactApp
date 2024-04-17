import { useGetAllProductsQuery } from "../store/apis/apiSlice";
import Card from "./Card";

function Data() {
  //Snakker sammen med apien ved at sætte const dataen til at være lig med useGetAllProductsQuery
  //Refetch kører listen igen
  const { data: product, error, isError, isLoading, refetch } = useGetAllProductsQuery();

  //Venter på svar fra apien
  let content;
  if (isLoading) {
    content = <div>Loading;</div>
  } else if (error) {
    content = <div>Error loading products.</div>;
  } else {
    //Den gennem løber listen af data ved hjælp af map
    content = product.results.map((product) => {
      //Henter Refetch ved at klikke på en knap, så den kan gøre det flere gange
      return <Card onmoreclick={refetch} product={product} />
    });
    }

    //Displayer content på skærmen
    return (
    <div>
      {content}
    </div>
    );
}

export default Data;