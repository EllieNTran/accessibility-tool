import beyondImage from '../images/beyond-image.png';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BeyondImage = () => (
    <Image src={beyondImage} alt="Beyond" id="beyond-image"/>
  );

  
  
const BeyondButton = (): JSX.Element => {
  return (
    <div id="BeyondButton">
      <Button className="buttons" id='dash-button' variant="contained">
          <div className="icon-container">
              <BeyondImage />
          </div>
          <div className="beyondText-container">
              Beyond
          </div>
      </Button>
    </div>
  );
};

  export default BeyondButton;