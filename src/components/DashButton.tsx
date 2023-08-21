import Button from '@mui/material/Button';
import dashImage from '../images/dash-image.png';
import Image from 'next/image';

const DashImage = (): JSX.Element => {
  return (
    <Image src={dashImage} alt="Dash" id="dash-image"/>
  )
}

const DashButton = (): JSX.Element => {
  return (
    <div id="DashButton">
      <Button className="buttons" id='dash-button' variant="contained">
        <div className="icon-container">
          <DashImage />
          </div>
        <div className="dashText-container">
          Dash
        </div>
      </Button>
    </div>
)
}

export default DashButton;