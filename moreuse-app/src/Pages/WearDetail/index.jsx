import {Page} from '../../Components/Page';
import { WearDetailContainer, WearDetailContent, WearImageContainer } from './styles';
import { Button } from '../../Components/Button';
import { useParams } from 'react-router-dom';

const WearDetail = () => {

  const {id} = useParams ();

  return (
    <Page>
      <WearDetailContainer>
        <WearImageContainer>
          <img src="https://www.kidhouse.co/9992-large_default/mameluco-con-gorro-para-bebe-nino-menta.jpg" alt="" />
          </WearImageContainer>
        <WearDetailContent>
          <h2>Referencia: {id}</h2>
          <h3>Mameluco</h3>
          <h4>2 meses / masculino</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis laboriosam ea. Maiores facere nisi illo, illum mollitia non ex suscipit possimus officiis tempora animi optio, esse dolorem iure quae?</p>
        </WearDetailContent>
      </WearDetailContainer>
      <Button text='Comprar' />
    </Page>
  )
}

export default WearDetail;
