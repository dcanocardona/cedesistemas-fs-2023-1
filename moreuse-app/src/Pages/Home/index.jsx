import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItem";
import { WearListContainer } from "./styles";

const WEAR_LIST = [
  {
    _id: 1,
    image: 'https://www.kidhouse.co/9992-large_default/mameluco-con-gorro-para-bebe-nino-menta.jpg',
    name: 'Mameluco',
    target: '0-3 años',
    gender: 'masculino'
  },
  {
    _id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0403/7309/2520/products/lenadora-roja-frente_600x.jpg?v=1656697141',
    name: 'Camisa leñadora',
    target: '4 meses',
    gender: 'masculino'
  },
  {
    _id: 3,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 4,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 5,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 6,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 7,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 8,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  },
  {
    _id: 9,
    image: 'https://hmcolombia.vtexassets.com/arquivos/ids/2393970-483-725/Vestido-con-falda-de-vuelo---Verde-claro-Mariposas---H-M-CO.jpg?v=638092796207870000',
    name: 'Vestido',
    target: '9 meses',
    gender: 'femenino'
  }
]

const Home = () => {

  return (
    <Page>
      <h1>Home Page</h1>
      <WearListContainer>
        {
          WEAR_LIST.map((item, key) => <WearItem key={key} {...item} />)
        }
      </WearListContainer>
    </Page>
  )
}

export default Home;

