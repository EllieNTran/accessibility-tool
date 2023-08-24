import Button from '@mui/material/Button';
import dashImage from './images/dash-image.png';
import Image from 'next/image';

const DashImage = (): JSX.Element => {
  return (
    <Image src={dashImage} alt="Dash" id="dash-image"/>
  )
}

const DashButton = (): JSX.Element => {
  return (
    <div id="DashButton">
      <Button sx={{
        variant: "contained",
        height: "160px",
        width: "610px",
        backgroundColor: "#2E2644"
      }}
      >
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