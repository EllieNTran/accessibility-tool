import '@styles/globals.css';
import Banner from '@components/Banner';
import DashButton from '@components/DashButton';
import BeyondButton from '@components/BeyondButton';
import RunChecksButton from '@components/RunChecksButton';
import { Box, Container, Grid } from '@mui/material';

const App = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="mt-8">
        <Banner />
      </div>
      <div className="flex justify-between w-full mt-12">
        <DashButton />
        <BeyondButton />
      </div>
      <div className="flex justify-center mt-12">
        <RunChecksButton />
      </div>
    </section>
  )
}

// function App() {
//   return (
//     <Box display="flex" flexDirection="column"
//       sx={{minHeight: "100vh"}}>
//         <div>
//           <Banner />
//         </div>
//         <Box display="flex" flexDirection="row" justifyContent="space-between"
//         sx={{minHeight: "23vh", mt:6}}>
//           <div>
//             <DashButton />
//           </div>
//           <div>
//             <BeyondButton />
//           </div>
//         </Box>
//         <Box display="flex" justifyContent="center"
//         sx={{mt: 6}}>
//           <RunChecksButton />
//         </Box>
//     </Box>
//   );
// }
 
export default App;