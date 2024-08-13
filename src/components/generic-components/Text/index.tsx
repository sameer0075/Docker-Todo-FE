import { Typography } from '@mui/material'

const CustomText = ({sx, content, variant}: any) => {
  return (
    <Typography
      sx={sx}
      variant={variant}
    >
      {content}
    </Typography>
  )
}

export default CustomText