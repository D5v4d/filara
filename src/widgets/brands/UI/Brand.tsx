import { Box } from "@mui/material"
import { BrandForm, TabBrands} from "../../../features/brands"

export const Brands = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap:'24px'}}>
      <BrandForm />
      <TabBrands/>
    </Box>
  )
}


